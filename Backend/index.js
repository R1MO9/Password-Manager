import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './src/db/index.js';
import UserRoute from './src/Routes/User.route.js';

import dotenv from 'dotenv';
import User from './src/models/User.model.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/', UserRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/allUser', async (req, res) => {
    const reso = await User.find();
    res.send(reso);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("🌻 Server running on port 5000");
});
