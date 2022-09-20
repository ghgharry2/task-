import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            id: req.body.id,
            username: req.body.username,
            first_name: req.body.first_name,
            surname: req.body.surname,
            password: hash,

        });
        await newUser.save();
        res.status(200).send("user has been created.")

    }
    catch (err) {
        next(err)
    }
};
export const login = async (req, res, next) => {
    try {

        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, " Incorrect username or password"));

        const checkingPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkingPassword) return (next(createError(400), "Incorrect username or password"));

        const token = jwt.sign({ id: user.id }, process.env.JWT);

        const { password, _id, ...otherDetails } = user._doc;
        res.
            cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails } });


    }
    catch (err) {
        next(err)
    }
};
