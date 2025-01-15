import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phone: {
            type: Number,
            reuired: true,
            unique: true,
        },
        fullName: {
            type: String,
        },
        profileImage: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true },
);

userSchema.pre('save', async function (next) {
    if(!this.isModified('passowrod')) return next();

    this.password = await bcrypt.hash(this.password, 16);
    next()
});

userSchema.methods.isPasswordCorrect = async (password) => {
    console.log(await bcrypt.compare(password, this.password));
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = () => {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName,
            phone: this.phone,
        },
        process.nextTick.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = () => {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.nextTick.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = model("User", userSchema);
