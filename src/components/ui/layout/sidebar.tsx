import { Home, Settings, PlusCircle, History, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Sidebar = ({ className = "" }) => {
    const logout = () => {
        // remove cookies
        console.log(document.cookie);

        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    };
    return (
        <div className={`bg-white shadow-md ${className}`}>
            <div className="p-4">
                <h1 className="text-2xl font-bold text-gray-800">Laxi</h1>
            </div>
            <nav className="mt-8">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
                    <Home className="w-5 h-5 mr-2" />
                    Home
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Generate Post
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                    <History className="w-5 h-5 mr-2" />
                    Post History
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
                    <Settings className="w-5 h-5 mr-2" />
                    Settings
                </a>
                <Button
                    variant={'ghost'}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
                    onClick={logout}
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    LogOut
                </Button>
            </nav>
        </div>);
};
