import mongoose from "mongoose";


const hotelSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    subwayDistance:{
        type: Number,
    },
    photos:{
        type: [String]
    },
    descriptionShort:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min: 0,
        max: 10
    },
    rooms:{
        type: [String],
    },
    cheapestPrice:{
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    },
    features:{
        type: [String]
    },
    price:{
        type:Number
    },
    reviews:{
        type:Number
    },
    freeCancellation:{
        type: Boolean,
        default: true
    },
    freeTaxi:{
        type: Boolean,
        default: false
    },
    subwayTitle:{
        type: String
    },
    titleSrc:{
        type: String
    },
    title:{
        type: String
    }
})


export default mongoose.model("HotelModel", hotelSchema);