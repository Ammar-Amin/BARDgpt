import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/index.js';

dotenv.config();

const app = express();

connectDB()
    .then(() => {
        app.on('error', (err) => {
            console.log("Error Encountered :", err);
            throw err;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Sever is running on ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDb connection failed: ", err)
    })

app.get('/', (req, res) => {
    res.send("Welcome to the app!");
})
