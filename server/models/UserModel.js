import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required: true
    },
    userMail:{
        type:String,
        required: true,
        unique: true
    },
    country:{
        type: String,
        default: "notSet"
    },
    img:{
        type: String,
        default: "notSet"
    },
    city:{
        type: String,
        default: "notSet"
    },
    phone:{
        type: String,
        default: "notSet"
    },
    userPassword:{
        type:String,
        required: true
    },
    isAdmin:{
        type:Boolean,
        default: false
    },
    bookedRooms:{
        type:[Number]
    },
    createdAt:{
        type:Date, 
    }
},
{timestamps: true}
)


export default mongoose.model("UserModel", userSchema);