import { NextResponse } from 'next/server';

export const DELETE = async () => {
    const response = NextResponse.json(
        { message: 'Logout successful' },
        { status: 200 });
    response.cookies.set(
        'token',
        '',
        { httpOnly: true });
    return response;
};