import { NextRequest, NextResponse } from 'next/server';
import connect from '@/database';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

connect();

export const POST = async (request: NextRequest) => {
    try {
        const requestBody = await request.json();
        const {
            firstname,
            lastname,
            email,
            phone,
            password
        } = requestBody;

        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json(
                { error: 'A user is already registered with that email' },
                { status: 400 }
            );
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            firstname,
            lastname,
            email,
            phone,
            password: hashedPassword,
        });
        return NextResponse.json(
            {
                message: 'Registered successfully',
                user: {
                    _id: newUser.toObject()._id,
                    firstname: newUser.toObject().firstname,
                    lastname: newUser.toObject().lastname,
                    email: newUser.toObject().email,
                    phone: newUser.toObject().phone
                }
            },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 });
        } else {
            return NextResponse.json(
                { message: 'An unknown error occured while registering' },
                { status: 500 });
        }
    }
};