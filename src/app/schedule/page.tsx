"use client";
import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/ui/layout/navbar';
import Sidebar from '@/components/ui/layout/sidebar';
import { Sparkles } from 'lucide-react';
import {
    Card,
    CardContent,
    CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import SocialMediaCheckboxes from '@/components/ui/layout/socialMediaCheckboxes';
import { Separator } from '@/components/ui/separator';
import PostCard from '@/components/ui/layout/postCard';
import toast, { Toaster } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { StoreUserSession } from '@/state/userState';
import { ClockLoader } from 'react-spinners';

interface Post {
    content: string;
    scheduledDate: Date;
    socialMediaAccounts: string[];
}

function HomePage() {
    const user = StoreUserSession((state) => state.user);
    const [post, setPost] = useState<Post>({
        content: "",
        scheduledDate: new Date(),
        socialMediaAccounts: [],
    });
    const [posts, setPosts] = useState<Post[]>([]);
    async function schedulePost() {
        try {
            if (user) {
                const response = await axios.post('/api/post', { ...post, author: `${user._id}` });
                if (response.status == 201) {
                    toast.success('Post scheduled successfully');
                    console.log("hey");
                    setPost({
                        content: "",
                        scheduledDate: new Date(),
                        socialMediaAccounts: [],
                    });
                }
            } else {
                throw new Error('Cannot read user');
            }
        } catch (error: AxiosError | any) {
            toast.error(`An error occured: ${error.response?.data.error || error.message}`);
        }
    }


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                if (response.status == 200) {
                    console.log(response.data.posts);
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

                <div className="w-full flex-row flex gap-x-10">
                    <div className="w-full flex-col flex self-start gap-y-10">

                        <Button variant={'outline'} className='w-[600]'>
                            <Sparkles className='w-8 h-8' /> Leave it all to Pixy
                        </Button>

                        <Card className='w-[600]'>
                            <CardContent className='flex flex-col gap-4 pt-4'>
                                <div className='flex flex-row justify-between items-center'>
                                    <p className="flex-1 text-secondary-foreground">Write your post</p>
                                    <p className='flex-1 text-center'>OR</p>
                                    <Button variant={'outline'} className='flex-1'>
                                        <Sparkles className='w-8 h-8' /> Leave it to Pixy
                                    </Button>
                                </div>
                                <Textarea
                                    onChange={(e) => setPost({ ...post, content: e.target.value })}
                                    placeholder="Type your message here."
                                    className='min-h-[200px]'
                                />

                                <div className='flex flex-row justify-between items-center'>
                                    <p className="flex-1 text-secondary-foreground">Schedule a post time</p>
                                    <p className='flex-1 text-center'>OR</p>
                                    <Button variant={'outline'} className='flex-1'>
                                        <Sparkles className='w-8 h-8' /> Leave it to Pixy
                                    </Button>
                                </div>
                                <Input
                                    type='datetime-local'
                                    className='w-full'
                                    onChange={(e) => setPost({ ...post, scheduledDate: new Date(e.target.value) })}
                                />

                                <div className='flex flex-row justify-between items-center'>
                                    <p className="flex-1 text-secondary-foreground">Select account to be posted to</p>
                                    <p className='flex-1 text-center'>OR</p>
                                    <Button variant={'outline'} className='flex-1'>
                                        <Sparkles className='w-8 h-8' /> Leave it to Pixy
                                    </Button>
                                </div>
                                <SocialMediaCheckboxes
                                    setAccounts={(accounts: string[]) => setPost({ ...post, socialMediaAccounts: accounts })}
                                />

                            </CardContent>
                            <CardFooter>
                                <Button
                                    className='w-full'
                                    onClick={schedulePost}
                                >Schedule</Button>
                            </CardFooter>
                        </Card>

                    </div>

                    <Separator orientation="vertical" className='h-full bg-border border-blue-800' />

                    <div className="w-full flex-col flex self-start gap-y-10">
                        {Array.from({ length: 3 }, (_, i) => <PostCard key={i} postsArray={[]} className='w-3/4' />)}
                    </div>


                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default HomePage;
