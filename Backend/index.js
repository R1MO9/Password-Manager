import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './src/db/index.js';
import UserRoute from './src/Routes/User.route.js';

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


app.listen(process.env.PORT || 5000, () => {
    console.log(`🌻 Server is running on port ${process.env.PORT || 5000}`);
});
