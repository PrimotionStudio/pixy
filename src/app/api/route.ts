import { NextResponse } from 'next/server';

export const GET = () => {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
};