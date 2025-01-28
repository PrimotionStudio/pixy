import { NextRequest, NextResponse } from 'next/server';
import connect from '@/database';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

connect();

export const POST = async (request: NextRequest) => {
    try {
        const requestBody = await request.json();
        const { email, password } = requestBody;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );
        if (!isMatch) {
            return NextResponse.json(
                { error: 'Incorrect password' },
                { status: 401 }
            );
        }
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET!,
            { expiresIn: '1d', }
        );
        return NextResponse.json(
            {
                message: 'Login successful',
                user: {
                    _id: user._id as String,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    phone: user.phone
                }
            },
            {
                status: 200,
                headers: { 'Set-Cookie': `token=${token}; HttpOnly; Path=/; Max-Age=3600;` },
            }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            );
        }
        else {
            return NextResponse.json(
                { message: 'An unknown error occured while logging in' },
                { status: 500 }
            );
        }
    }
};