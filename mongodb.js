import mongoose from "mongoose";
const url = 'mongodb://127.0.0.1:27017/library';

export const connectDb = async()=>{
    try {
        const res = await mongoose.connect(url);
        console.log('Database is connected');
    } catch (error) {
        console.log('Connection Failed');
    }
}
