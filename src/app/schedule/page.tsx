"use client";
import React, { useState } from 'react';
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


function HomePage() {
    const [post, setPost] = useState<{
        content: string,
        scheduledDate: Date,
        socialMediaAccounts: string[];
    }>({
        content: "",
        scheduledDate: new Date(),
        socialMediaAccounts: [],
    });
    function schedulePost() {
        toast('Post scheduled successfully');
        toast(`content ${post.content}`);
        toast(`scheduledDate ${post.scheduledDate}`);
        toast(`socialMediaAccounts ${post.socialMediaAccounts}`);
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
                                    accounts={post.socialMediaAccounts}
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
                        {Array.from({ length: 3 }, (_, i) => <PostCard key={i} className='w-3/4' />)}
                    </div>


                </div>
            </div>
        </div >
    );
}

export default HomePage;
