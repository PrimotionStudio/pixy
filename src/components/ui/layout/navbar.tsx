import { Settings, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <div
            id='navbar'
            className="w-full flex justify-between align-center p-5 border shadow">
            <Link href={'#'}>
                <h1 className='text-2xl font-bold flex'> <Sparkles className='w-8 h-8 mr-2' /> Pixy</h1>
            </Link>
            <Link href={'#'}>
                <Settings className='w-8 h-8' />
            </Link>

        </div>
    );
}

export default Navbar;