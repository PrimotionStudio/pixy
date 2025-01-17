import { NextRequest, NextResponse } from 'next/server';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

export const GET = async (request: NextRequest) => {
    try {
        const token = request.cookies.get('token');
        if (!token || token?.value == '') {
            return NextResponse.json(
                { message: 'No token found' },
                { status: 401 }
            );
        }
        const decodedObject = await jwt.verify(token.value, process.env.JWT_SECRET!);
        const { id } = decodedObject as { id: string; };
        if (!id) {
            return NextResponse.json(
                { message: 'Invalid token' },
                { status: 401 }
            );
        }
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json(
                { message: 'No user found with Id' },
                { status: 404 }
            );
        }
        return NextResponse.json(
            { message: 'Session Authenticated', user },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { error: 'An error occured' },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                { error: 'An error occured' },
                { status: 500 }
            );
        }
    }
};