import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";


// GET ALL USERS
export const getUsers = async(req,res,next) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (err) {
        next(err)
    }
}

// GET USER BY ID
export const getUser = async(req,res,next) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (err) {
        next(err)
    }
}

// REMOVE USER WITH ID
export const removeUser = async(req,res,next) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message:`there is no user with ID : ${id}`});
    const user = await UserModel.findById(id);
    if(!user) return res.status(404).json({message: `there is no user with id : ${id}`});
    // console.log(`admin: ${user.isAdmin}`);
    if(user.isAdmin) return res.status(401).json({message:"You cant remove admin"});
    try {
        await UserModel.findByIdAndDelete(id);
        res.status(200).json({message : `user with ID : ${id} removed successfully`});
    } catch (err) {
        next(err)
    }
}



// UPDATE user
export const updateUser = async(req,res,next) => {
    const { id } = req.params;
    const newUser = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(`there is no user with ID : ${id}`);
    const existId = await UserModel.findById(id);
    if(!existId) return res.status(400).json({message:`there is no user with ID : ${id}`})
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id,{...newUser,id},{new:true});
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}



export const getReservedRooms = async(req,res,next) => {
    const { id } = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(`there is no user with ID : ${id}`);
    const existId = await UserModel.findById(id);
    if(!existId) return res.status(400).json({message:`there is no user with ID : ${id}`})
    try {
        const user = await UserModel.findById(id);
        res.status(200).json(user.bookedRooms)
    } catch (err) {
        next(err)
    }
}





export const updateReserve = async(req,res,next) => {
    const { id,bookedRooms } = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(`there is no user with ID : ${id}`);
    const existId = await UserModel.findById(id);
    if(!existId) return res.status(400).json({message:`there is no user with ID : ${id}`})
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id,{ $push: { bookedRooms: bookedRooms  } },{new:true});
        res.status(200).json(updatedUser.bookedRooms)
    } catch (err) {
        next(err)
    }
}



