import mongoose from "mongoose";
import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";

export const signUp = async (req, res, next) => {
    // Database operations are atomic. (ex: Insert either works completely or it doesn't)
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        const error = new Error('User already exists');
        error.statusCode = 409;
        throw error;
    }

    // Hash Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // if something went wrong when creating user, 'session' will identify that and trigger the catch block
        const newUsers = await User.create([{name, email, password,hashedPassword}], {session});
        const token = jwt.sign({userId : newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

    await session.commitTransaction();
    await session.endSession();

    res.status(201).json({success: true, message: 'User successfully created', data: {token, user: newUsers[0]}});

    }catch(error){
        await session.abortTransaction();
        await session.endSession();
        next(error);
    }
}
export const signIn = async (req, res, next) => {}
export const signOut = async (req, res, next) => {}
