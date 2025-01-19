import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon
} from 'lucide-react';
import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from '@/components/ui/card';

function PostCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <Card className={`w-1/2 pt-4 ${className}`}>
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
    );
}

export default PostCard;