import { NextRequest, NextResponse } from 'next/server';
import Post from '@/models/Post';
import connect from '@/database';

export async function POST(request: NextRequest) {
    const { scheduledDate, content, author, socialMediaAccount, aiGenerated } = await request.json();
    if (!scheduledDate || !content || !author || !socialMediaAccount)
        return NextResponse.json({ message: 'Missing required parameters' }, { status: 400 });
    try {
        await connect();
        const post = await Post.create({ scheduledDate, content, author, socialMediaAccount, aiGenerated });
        return NextResponse.json({
            message: 'New post scheduled successfully',
            post
        }, { status: 201 });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.message }, { status: 500 });
        return NextResponse.json({ message: 'Error creating post' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
        await connect();
        const postId = await request.nextUrl.searchParams.get('postId');
        if (!postId) return NextResponse.json({ message: 'Missing required parameters' }, { status: 400 });
        const post = await Post.findById(postId);
        return NextResponse.json({
            message: 'Posts fetched successfully',
            posts: post
        }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.message }, { status: 500 });
        return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        await connect();
        const postId = await request.nextUrl.searchParams.get('postId');
        if (!postId) return NextResponse.json({ message: 'Missing required parameters' }, { status: 400 });
        const post = await Post.findByIdAndDelete(postId);
        return NextResponse.json({
            message: 'Post deleted successfully',
            post
        }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) return NextResponse.json({ message: error.message }, { status: 500 });
        return NextResponse.json({ message: 'Error deleting posts' }, { status: 500 });
    }
}