import User from "../Models/User.model.js";
import bcrypt from "bcrypt";
import e from "express";
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

    console.log(process.env.ACCESS_TOKEN_SECRET);

    const accessToken = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
    existingUser.accessToken = accessToken;

    await existingUser.save();

    console.log("User 👤 logged in successfully");
    return res.status(200).json({ result: existingUser });
}

const logoutUser = async (req, res) => {
    const { password, username } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            return res.status(404).json({ message: "User not found. Please log in again." });
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(406).json({ message: "Password is incorrect" });
        }

        existingUser.accessToken = '';
        await existingUser.save();

        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "An error occurred during logout", error });
    }
};


export {
    registerUser,
    loginUser,
    logoutUser
};