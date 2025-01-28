import { NextRequest, NextResponse } from 'next/server';
import Post from '@/models/Post';
import connect from '@/database';
import jwt from 'jsonwebtoken';

export const GET = async (request: NextRequest) => {
    try {
        await connect();
        const token = request.cookies.get('token');
        console.log('token', token);
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
        const posts = await Post.find({ author: id });
        return NextResponse.json({
            message: 'Posts fetched successfully',
            posts
        }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.message }, { status: 500 });
        return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
    }
};