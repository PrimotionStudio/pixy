import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

// Define the shape of the user session
export interface UserSession {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

// Define the shape of the Zustand store
export interface UserState {
    user: UserSession | null; // User can be null if not logged in
    setUser: (user: UserSession) => void; // Action to update user state
    clearUser: () => void; // Action to clear user state (logout)
}

// Custom localStorage adapter
const customStorage: PersistStorage<UserState> = {
    getItem: (name) => {
        const storedValue = localStorage.getItem(name);
        return storedValue ? JSON.parse(storedValue) : null;
    },
    setItem: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name) => {
        localStorage.removeItem(name);
    },
};

export const StoreUserSession = create<UserState>()(
    persist(
        (set) => ({
            user: null, // Initial state: user is null (not logged in)
            setUser: (user: UserSession) => set(() => ({ user })), // Update user state
            clearUser: () => set(() => ({ user: null })), // Clear user state (logout)
        }),
        {
            name: 'user-storage', // Key for custom storage
            storage: customStorage, // Use custom localStorage adapter
        }
    )
);
