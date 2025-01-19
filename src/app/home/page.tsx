import React from 'react';
import Navbar from '@/components/ui/layout/navbar';
import Sidebar from '@/components/ui/layout/sidebar';
import {
    Alert,
    AlertTitle,
    AlertDescription
} from '@/components/ui/alert';
import {
    Sparkles,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon
} from 'lucide-react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@/components/ui/card';


function HomePage() {
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
                        <Card className="w-1/2">
                            <CardHeader>
                                <CardTitle>Next Posts</CardTitle>
                                <CardDescription>You have 3 scheduled posts left.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className=" flex items-center space-x-4 rounded-md border p-4">
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            @PrimeOkanlawon
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius omnis cumque asperiores recusandae voluptatem deleniti totam pariatur minus quos laborum.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-between'>
                                <p className="text-sm text-muted-foreground">Next post in 3 days: 19/02/2025</p>
                                <div className="flex gap-3">
                                    <FacebookIcon className='w-5 h-5' />
                                    <InstagramIcon className='w-5 h-5' />
                                    <TwitterIcon className='w-5 h-5' />
                                    <LinkedinIcon className='w-5 h-5' />
                                </div>

                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default HomePage;
