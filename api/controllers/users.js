import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";


export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findOneAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedUser);
    }
    catch (err) {
        next(err)
    }

};
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
};