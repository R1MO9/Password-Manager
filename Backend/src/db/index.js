import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;