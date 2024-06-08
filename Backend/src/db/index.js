import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`mongodb+srv://rupankaradas54:nZ5Qn95.4f9YpMH@test.wy6yjf5.mongodb.net/${DB_NAME}`
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;