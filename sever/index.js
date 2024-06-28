import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the app!");
})

app.listen(process.env.PORT || 8000, () => {
    console.log(`Sever is running on ${process.env.PORT}`);
})