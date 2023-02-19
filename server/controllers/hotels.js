import HotelModel from "../models/HotelModel.js";
import mongoose from "mongoose";
import RoomModel from "../models/RoomModel.js";

// GET ALL
// temperary just gets all featured:true items
// also limit part
// export const getHotels = async(req,res,next) => {
//     const {rate ,min, max, ...others } = req.query;
//     try {
//         const count = await HotelModel.countDocuments({rating: {$gt : rate || 0}});
//         const hotels = await HotelModel.find({
//             ...others,
//             price: {$gt: min || 50, $lt: max || 99999},
//             rating: {$gt : rate || 0}
//         }).limit(req.query.limit);
//         res.status(200).json(hotels)
        
//     } catch (err) {
//         next(err)
//     }
// }
export const getHotels = async(req,res,next) => {
    try {
        const hotels = await HotelModel.find();
        res.status(200).json(hotels);
    } catch (err) {
        next(err)
    }
}

// GET ONE
export const getHotel = async(req,res,next) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    const existId = await HotelModel.findById(id)
    if(!existId) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    try {
        const hotel = await HotelModel.findById(id);
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}

// CREATE
export const createHotel = async(req,res,next) => {
    const hotel = req.body;
    const newHotel = new HotelModel(hotel)
    try {
        await newHotel.save();
        res.status(201).json(newHotel)
    } catch (err) {
        next(err)
    }
}


// DELETE
export const deleteHotel = async(req,res,next) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    const existId = await HotelModel.findById(id)
    if(!existId) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    try {
        await HotelModel.findByIdAndRemove(id);
        res.status(200).json({message : `hotel with ID : ${id} removed successfully`})
    } catch (err) {
        next(err)
    }
}

// UPDATE
export const updateHotel = async(req,res,next) => {
    const { id } = req.params;
    const newHotel = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.send(`there is no hotel with ID : ${id}`);
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(id,{...newHotel,id},{new:true});
        res.status(200).json(updatedHotel)
    } catch (err) {
        next(err)
    }
}


// countByCity
export const countByCity = async (req,res,next) => {
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return HotelModel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}


//  needs refactor with dynamic data 
export const countByType = async (req,res,next) => {
    try {
        const img1 = "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
        const img2 = "https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o="
        const img3 = "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
        const img4 = "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
        const img5 = "https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
        const hotelCount = await HotelModel.countDocuments({type:"hotel"});
        const apartmanCount = await HotelModel.countDocuments({type:"apartman"});
        const resortCount = await HotelModel.countDocuments({type:"resort"});
        const villaCount = await HotelModel.countDocuments({type:"villa"});
        const cabinCount = await HotelModel.countDocuments({type:"cabin"});
        res.status(200).json([
            {type:"hotel", count:hotelCount, id:1, img:img1 },
            {type:"apartman", count:apartmanCount, id:2, img:img2 },
            {type:"resort", count:resortCount, id:3, img:img3 },
            {type:"villa", count:villaCount, id:4, img:img4 },
            {type:"cabin", count:cabinCount, id:5, img:img5 },
        ])
    } catch (err) {
        next(err)
    }
}

 


// get hotel rooms

export const  getHotelRooms = async (req,res,next) => {
    try {
        const { id } = req.params;
        const hotel = await HotelModel.findById(id);
        const list = await Promise.all(hotel.rooms.map( room => {
            return RoomModel.findById(room)
        }  ))
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}