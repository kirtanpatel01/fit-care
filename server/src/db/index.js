import mongoose from 'mongoose';
import { DB_NAME  } from '../constant.js';

export const connectDB = async() => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
       console.log(`Mongodb connection established!
        \nThe HOST is ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Mongodb connection failedL: ", error)
    }
}
