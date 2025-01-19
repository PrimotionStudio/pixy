import { HomeIcon, Sparkles, ClockIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Sidebar() {
    return (
        <div
            id='sidebar'
            className="container border flex flex-col justify-around items-center rounded-lg h-1/2 w-20 shadow">
            <Link href={'/home'} title='Home'>
                <HomeIcon className='w-10 h-10 rounded-full hover:shadow-lg' />
            </Link>
            <Link href={'/schedule'} title='Schedule'>
                <Sparkles className='w-20 h-20 rounded-full border ml-10 bg-gradient-to-br from-white to-blue-100 p-4 hover:to-blue-300' />
            </Link>
            <Link href={'/posts'} title='Posts'>
                <ClockIcon className='w-10 h-10 rounded-full hover:shadow-lg' />
            </Link>
        </div>
    );
}

export default Sidebar;