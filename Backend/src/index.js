import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db/index.js';
import { registerUser, loginUser } from './Controllers/User.controller.js';
import { saveSitePassword } from './Controllers/Site.controller.js';


const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/save-password', saveSitePassword);
app.use('/register', registerUser);
app.use('/login', loginUser);


app.listen(5000, () => {
    console.log("🌻 Server running on port 5000");
});
