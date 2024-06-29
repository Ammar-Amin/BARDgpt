import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/index.js';

dotenv.config();

const app = express();

app.use(express.json())

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

// routes import 
import userRouter from './routes/user.router.js';

// routes declaration 
app.use('/api/users', userRouter);
