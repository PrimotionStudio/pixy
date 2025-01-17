import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => console.log('Connected to MongoDB'));
        connection.on('error', (error) => {
            if (error instanceof Error) console.log(error.message);
            else console.log('An unknown error occured while connecting to MongoDB');
            process.exit();
        });
    } catch (error: unknown) {
        if (error instanceof Error) console.log(error.message);
        else console.log('An unknown error occured while connecting to MongoDB');
        process.exit();
    }
};

export default connect;