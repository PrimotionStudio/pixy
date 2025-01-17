"use client";

import { useState } from 'react';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BeatLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function RegistrationPage() {
    const router = useRouter();
    const [isLogin, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
    });

    const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            if (user.password !== user.password2) {
                toast.error("Password doesn't match");
                setIsLoading(false);
                return;
            }
            const response = await axios.post('/api/register', user);
            if (response.status == 201) {
                toast('Login to access your account');
                toast.success('Registered successfully');
                router.push('/login');
            } else {
                toast.error('A login error occured');
                setIsLoading(false);
            }
        } catch (error) {
            if (error instanceof AxiosError) toast.error(error.response?.data.error || error.message);
            else toast.error('An unknown error occured');
            setIsLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <form action="" onSubmit={handleRegistration}>
                    <CardHeader className="space-y-1">
                        <div className="flex items-center justify-start">
                            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                        </div>
                        <CardDescription>
                            Enter your information to create your Laxi account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex">
                            <div className="space-y-2 w-full">
                                <Label htmlFor="fname">Firstname</Label>
                                <Input
                                    id="fname"
                                    value={user.firstname}
                                    onChange={(e) => setUser({ ...user, firstname: e.target.value })}
                                    placeholder="John"
                                    required />
                            </div>
                            <div className="space-y-2 w-full">
                                <Label htmlFor="lname">Lastname</Label>
                                <Input
                                    id="lname"
                                    value={user.lastname}
                                    onChange={(e) => setUser({ ...user, lastname: e.target.value })}
                                    placeholder="Doe"
                                    required />
                            </div>
                        </div>
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
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="phone"
                                value={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                placeholder="+555-555-555"
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
                        <div className="space-y-2">
                            <Label htmlFor="password2">Confirm Password</Label>
                            <Input
                                id="password2"
                                type="password"
                                value={user.password2}
                                onChange={(e) => setUser({ ...user, password2: e.target.value })}
                                required />
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="terms" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
                            <Label htmlFor="terms" className="text-sm">
                                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                            </Label>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button
                            type='submit'
                            className="w-full"
                            disabled={isLogin}
                        >
                            {isLogin ? (<BeatLoader color="#ffffff" />) : 'Create Account'}
                        </Button>
                        <div className="text-sm text-center text-gray-500">
                            Already have an account?{" "}
                            <Link href="/login" className="text-blue-600 hover:underline">
                                Log in
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