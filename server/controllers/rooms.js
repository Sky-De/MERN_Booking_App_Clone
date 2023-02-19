import RoomModel from "../models/RoomModel.js";
import HotelModel from "../models/HotelModel.js";
import mongoose from "mongoose";




export const getRooms = async(req,res,next) => {
    try {
        const rooms = await RoomModel.find();
        res.status(200).json(rooms)
    } catch (err) {
        next(err)        
    }
}
export const getRoom = async(req,res,next) => {
    const { id } = req.params;
    try {
        const room = await RoomModel.findById(id);
        res.status(200).json(room)
    } catch (err) {
        next(err)        
    }
}
export const getRoomBookedDates = async(req,res,next) => {
    const { id } = req.params;
    try {
        const room = await RoomModel.findOne({"roomNumbers._id": id},{"roomNumbers":1})
        res.status(200).json(room)
    } catch (err) {
        next(err)
    }
    console.log(id);
}
export const updateRoomBookedDates = async(req,res,next) => {
    try {
    await RoomModel.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.bookedDates": req.body.allDates
        },
      }
    );
    res.status(200).json({message: "Room bookedDates Updated"});
  } catch (err) {
    next(err);
  }
}

export const createRoom = async(req,res,next) => {
    const hotelId = req.params.hotelid;
    const room = req.body;
    const newRoom = new RoomModel(room)
    try {
         await newRoom.save();
         await HotelModel.findByIdAndUpdate(hotelId,{$push: { rooms: newRoom._id}},{new:true})
         res.status(200).json(newRoom)
    } catch (err) {
        next(err)        
    }
}

export const deleteRoom = async(req,res,next) => {
    const { id } = req.params;
    console.log(id);
    res.json("done")
    // const hotelId = req.params.hotelid;
    // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no room with ID : ${id}`});
    // const existId = await RoomModel.findById(id)
    // if(!existId) return res.status(404).json({message: `there is no room with ID : ${id}`});
    // try {
    //     await HotelModel.findByIdAndUpdate(hotelId,{$pull: { rooms: id}},{new:true})
    //     await RoomModel.findByIdAndDelete(id);
    //      res.status(200).json({message: `Room with ID : ${id} deleted successfully and hotel with ID : ${hotelId} updated`})
    // } catch (err) {
    //     next(err)        
    // }
}


export const updateRoom = async(req,res,next) => {
    const { id } = req.params;
    const newRoom = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no room with ID : ${id}`});
    const existId = await RoomModel.findById(id)
    if(!existId) return res.status(404).json({message: `there is no room with ID : ${id}`});
    try {
         const updatedRoom = await RoomModel.findByIdAndUpdate(id, {...newRoom, id},{new:true});
         res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)        
    }
}