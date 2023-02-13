import mongoose, { Schema } from "mongoose";


const placeSchema = Schema({
    country: {
        type:String,
        required: true
    },
    city: {
        type:String,
        required: true
    },
    startingPrice: {
        type:Number,
        required: true
    },
    rate: {
        type:Number,
    },
    img: {
        type:String,
    },
})


export default mongoose.model("PlcaeModel",placeSchema);