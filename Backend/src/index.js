import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/index.js';
import { registerUser, loginUser } from './Controllers/User.controller.js';
import { saveSitePassword, } from './Controllers/Site.controller.js';
import UserRoute from './Routes/User.route.js';

import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use('/', UserRoute);
// app.use('/save-password', saveSitePassword);
// app.use('/register', registerUser);
// app.use('/login', loginUser);


app.listen(5000, () => {
    console.log("🌻 Server running on port 5000");
});
