import User from "../Models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

    const newUser = new User({ name, email, password: hashedPassword});

    await newUser.save();
    console.log("User 👤 registered successfully");
    res.status(201).json({ message: "User registered successfully" });
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

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id
    }, 'test secret', {
        expiresIn: '1h'
    });

    console.log("User 👤 logged in successfully");
    return res.status(200).json({ result: existingUser, token });
}

export {
    registerUser,
    loginUser
};