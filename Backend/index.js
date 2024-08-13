import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './src/db/index.js';
import UserRoute from './src/Routes/User.route.js';
import { registerUser, loginUser, getUser } from './src/Controllers/User.controller.js';

import dotenv from 'dotenv';

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

app.post('/register', registerUser);

app.post('/login', loginUser);

app.get('/user', getUser);

app.listen(process.env.PORT || 5000, () => {
    console.log("🌻 Server running on port 5000");
});
