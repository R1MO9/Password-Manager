import User from "../Models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateFromEmail, generateUsername } from "unique-username-generator";

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if(existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const username = generateFromEmail(
        email, 3
    );

    const newUser = new User({ name, email, password: hashedPassword, username});

    await newUser.save();
    console.log("User 👤 registered successfully");

    return res.status(201).json({ result: newUser });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if(!existingUser) {
        return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if(!isPasswordCorrect) {
        return res.status(400).json({ message: "Password is incorrect" });
    }

    const accessToken = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
    existingUser.accessToken = accessToken;

    await existingUser.save();

    console.log("User 👤 logged in successfully");
    return res.status(200).json({ result: existingUser });
}

const logoutUser = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    const existingUser = await User.findOne({ email });

    if(!existingUser) {
        return res.status(400).json({ message: "User does not exist" });
    }

    existingUser.accessToken = "";
    await existingUser.save();

    console.log("User 👤 logged out successfully")
    return res.status(200).json({ message: "User logged out successfully" });
}

export {
    registerUser,
    loginUser,
    logoutUser
};