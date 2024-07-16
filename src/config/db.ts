import dotenv from 'dotenv';

dotenv.config();

import mongoose from 'mongoose';

export function connectDB() {

    const DATABASE_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ratingdb.xw8fnaw.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_APPNAME}`;	

    try {
        mongoose.connect(DATABASE_URL as string, {});

        console.log('Database connected');
    } catch (error) {
        console.log('Error on connect to database', error);
    }
}