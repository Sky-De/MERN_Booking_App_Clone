import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import JWT from "jsonwebtoken";


// REGISTER / LOG ON
export const registerUser = async (req,res,next) => {
    // needs add logic for res to not uniq name and mail
    try {
        const salt = bcrypt.genSaltSync(12);
        const hashedPassword = bcrypt.hashSync(req.body.userpassword, salt);
        const newUser = new UserModel({
            userName: req.body.username,
            userPassword: hashedPassword,
            userMail: req.body.usermail
        })

        await newUser.save();
        res.status(201).json(newUser)
    } catch (err) {
        next(err)
    }
}


// LOG IN USER
export const loginUser = async(req,res,next) => {
    try {
        // searchs for user by its name
        const user = await UserModel.findOne({userName:req.body.username});
        // returns if user dosen't exist
        if(!user) return next(createError(404,"Wrong password or userName"));
        // returns if pass is wrong
        const isPassCorrect = await bcrypt.compare(req.body.userpassword, user.userPassword);
        if(!isPassCorrect) return next(createError(404,"Wrong password or userName"));
        // if user be real we create and send id/isAdmin using JWT through COOKIE 
        const token = JWT.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET);
        const { userPassword, isAdmin, ...userInformation } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({...userInformation});
    } catch (err) {
        next(err)
    }
    // res.json({message:"done"});
}