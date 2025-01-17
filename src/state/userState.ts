import { create } from 'zustand';

export interface UserSession {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
}

export interface UserState {
    user: UserSession;
    setUser: (user: UserSession) => void;
}

export const StoreUserSession = create<UserState>((set) => ({
    user: {
        _id: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
    },
    setUser: (user: UserSession) => set(() => ({ user }))
}));