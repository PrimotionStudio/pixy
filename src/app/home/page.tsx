"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/ui/layout/navbar';
import Sidebar from '@/components/ui/layout/sidebar';
import {
    Alert,
    AlertTitle,
    AlertDescription
} from '@/components/ui/alert';
import { Sparkles } from 'lucide-react';
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import { ClockLoader } from 'react-spinners';
import PostCard from '@/components/ui/layout/postCard';
import { StoreUserSession } from '@/state/userState';
import axios, { AxiosError } from 'axios';
import toast, { Toaster } from 'react-hot-toast';


interface Post {
    content: string;
    scheduledDate: Date;
    socialMediaAccounts: string[];
}
function HomePage() {
    const { setUser } = StoreUserSession();
    const user = StoreUserSession((state) => state.user);
    const [posts, setPosts] = useState<Post[]>([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                if (response.status == 200) {
                    console.log(`Hey: `, response.data.posts);
                    // setPosts(response.data);
                }
            } catch (error: AxiosError | any) {
                toast.error(`An error occured: ${error.response?.data.error || error.message}`);
            }
        };
        if (user) fetchPosts();
    }, [user]);

    if (!user) {
        return (
            <div className="h-screen flex justify-center items-center">
                <ClockLoader />
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="w-full flex-1 flex justify-start items-center gap-x-20">
                <Sidebar />
                <div className="w-full flex-col flex pt-20 self-start gap-y-10">
                    <Alert className='w-fit'>
                        <Sparkles className="h-4 w-4" />
                        <AlertTitle>Welcome to Pixy!</AlertTitle>
                        <AlertDescription>
                            You can manually write-up social media posts and schedule them add tags people along with it, or leave it all up to <span className="font-bold">Pixy</span>.
                        </AlertDescription>
                    </Alert>

                    <div id="statistics" className='flex flex-wrap gap-x-10 gap-y-20 justify-start'>
                        <Card className="w-fit">
                            <CardContent className="p-10">
                                <CardTitle>-- <sub>days</sub> : -- <sub>hours</sub> : -- <sub>minutes</sub> : -- <sub>seconds</sub></CardTitle>
                                {/* <CardTitle>00 <sub>days</sub> : 00 <sub>hours</sub> : 00 <sub>minutes</sub> : 00 <sub>seconds</sub></CardTitle> */}
                                <CardDescription className='pt-3'>Countdown to next post.</CardDescription>
                            </CardContent>

                        </Card>
                        <Card className="w-fit">
                            <CardContent className="p-10">
                                <CardTitle>100 posts</CardTitle>
                                <CardDescription className='pt-3'>Total scheduled posts.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="w-fit">
                            <CardContent className="p-10">
                                <CardTitle>10 posts</CardTitle>
                                <CardDescription className='pt-3'>Total successfully posted.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                    <hr className='w-11/12 h-px bg-gray-200 border-0 dark:bg-gray-700' />

                    <div id="nextpost" className='flex flex-wrap gap-x-10 gap-y-20 justify-start'>
                        <div>
                            <h1 className='text-2xl font-bold'>Next Post</h1>
                            <p className='text-muted-foreground mb-2'>You have 3 scheduled posts left</p>
                            <PostCard postsArray={posts} />
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default HomePage;
