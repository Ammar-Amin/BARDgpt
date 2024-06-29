import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const dbConnected = await mongoose.connect(`${process.env.MONGO_DB_URL}`)
        // console.log(dbConnected)
        console.log(`MongoDB Connected Successfully!, \nDB HOST ${dbConnected.connection.host}`)
    } catch (err) {
        console.error("Couldn't connect MongoDB", err)
    }
}