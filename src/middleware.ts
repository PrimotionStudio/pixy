import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    let user;
    if (!token || token?.value == '')
        return NextResponse.redirect(new URL(
            '/', 
            request.url
        ));
    try {
        const sessionResponse = await fetch(
            `${request.nextUrl.origin}/api/session`,
            {
                method: 'GET',
                headers: {
                    'Cookie': `token=${token.value}`
                },
            });
        // console.log('sessionResponse', await sessionResponse.json());
        if (sessionResponse.ok)
            return NextResponse.next();
        return NextResponse.redirect(new URL('/', request.url));
    } catch (error) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

// Protected Routes
export const config = {
    matcher: [
        '/dashboard',
        '/post',
        '/generate-post',
        '/profile',
        '/post-history',
        '/settings'],
};