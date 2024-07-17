import dotenv from 'dotenv';

dotenv.config();

import mongoose from 'mongoose';

export function connectDB() {

    const DATABASE_URL = 'mongodb://localhost:27017/mydatabase';

    try {
        mongoose.connect(DATABASE_URL as string, {});

        console.log('Database connected');
    } catch (error) {
        console.log('Error on connect to database', error);
    }
}