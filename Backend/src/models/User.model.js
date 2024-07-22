import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    },
    accessToken: {
        type: String
    }
},
    {
        timestamps: true
    }
);

UserSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        { 
            userId: this._id, 
            email: this.email 
        }, 
        process.env.ACCESS_TOKEN_SECRET, 
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN 
        }
    );
};

UserSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        { 
            userId: this._id, 
            email: this.email 
        }, 
        process.env.REFRESH_TOKEN_SECRET, 
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN 
        }
    );
}

const User = mongoose.model("User", UserSchema);

export default User;