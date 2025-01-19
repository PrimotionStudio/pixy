import React from 'react';
import Navbar from '@/components/ui/layout/navbar';
import Sidebar from '@/components/ui/layout/sidebar';
import {
    Alert,
    AlertTitle,
    AlertDescription
} from '@/components/ui/alert';
import {
    PaperclipIcon,
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
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';


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


                    <Card className='w-[600]'>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-2'>
                            <Textarea placeholder="Type your message here." />
                            <Button>Send message</Button>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div >
    );
}

export default HomePage;
