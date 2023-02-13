import mongoose from "mongoose";
import PlaceModel from "../models/PlaceModel.js";


export const getPlaces = async(req,res,next) => {
    try {
        const places = await PlaceModel.find();
        res.status(200).json(places)
    } catch (err) {
        next(err)
    }
}

export const getPopularPlaces = async(req,res,next) => {
    // const {rate,...qu} = req.query;
    try {
        // gets popular places(upper/equal rate than 8.5)
        const places = await PlaceModel.find({rate:{$gte:8.5}}).limit(req.query.limit);
        res.status(200).json(places)
    } catch (err) {
        next(err)
    }
}

export const getPlace = async(req,res,next) => {
    const{ id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    const existId = await PlaceModel.findById(id);
    if(!existId) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    try {
        const place = await PlaceModel.findById(id);
        res.status(200).json(place)
    } catch (err) {
        next(err)
    }
}

export const createPlace = async(req,res,next) => {
    const place = req.body;
    const newPlace = new PlaceModel(place);
    try {
        await newPlace.save();
        res.status(201).json(newPlace)
    } catch (err) {
        next(err)
    }
}

export const updatePlace = async(req,res,next) => {
    const newPlace = req.body;
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    const existId = await PlaceModel.findById(id)
    if(!existId) return res.status(404).json({message: `there is no hotel with ID : ${id}`});

    try {
        const updatedPlace = await PlaceModel.findByIdAndUpdate(id,{...newPlace, id},{new:true});
        res.status(201).json(updatedPlace)
    } catch (err) {
        next(err)
    }
}

export const removePlace = async(req,res,next) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    const existId = await PlaceModel.findById(id)
    if(!existId) return res.status(404).json({message: `there is no hotel with ID : ${id}`});
    try {
        await PlaceModel.findByIdAndRemove(id);
        res.status(201).json({message:`place with ID : ${id} removed successfully`})
    } catch (err) {
        next(err)
    }
}