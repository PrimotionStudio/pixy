"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BeatLoader } from 'react-spinners';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState(
        {
            email: '',
            password: '',
        });

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/login', user);
            if (response.status == 200) {
                toast.success('Login successful');
                router.push('/home');
            } else {
                toast.error('A login error occured');
                setLoading(false);
            }
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response?.data.error || error.message);
            else
                toast.error('An unknown error occured');
            setLoading(false);
        }
    };

    return (
        <div className="
        min-h-screen 
        bg-gradient-to-br
        from-purple-100
        via-blue-100 
        to-green-100
        flex 
        items-center 
        justify-center p-4">
            <Card className="w-full max-w-md">
                <form action="" onSubmit={handleLogin}>
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-start">
                            <CardTitle className="text-2xl font-bold">Log into your account</CardTitle>
                        </div>
                        <CardDescription>
                            Let's continue from where you left off
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder="john@example.com"
                                required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                required />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            type='submit'
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? (<BeatLoader color="#ffffff" />) : 'Login'}
                        </Button>
                        <div className="text-sm text-center text-gray-500">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-blue-600 hover:underline">
                                Create an account
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
            <Link href={'/'} className="hover:underline">
                <Button variant="link" className="absolute top-4 left-4 hover:text-blue-600" size="sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Button>
            </Link>
            <Toaster />
        </div>
    );
}