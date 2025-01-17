import { Menu, Sidebar, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
    return (
        <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white shadow-md">
            <div className="flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden mr-2">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 p-0">
                        <Sidebar />
                    </SheetContent>
                </Sheet>
                <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>
            <div className="flex items-center">
                <Button variant="ghost" size="icon">
                    <Bell className="w-5 h-5" />
                </Button>
                <Avatar className="ml-4">
                    <AvatarImage />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};