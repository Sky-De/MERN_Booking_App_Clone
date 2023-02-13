import mongoose from "mongoose";



const subscribSchema = mongoose.Schema({
    subscribeMail:{
        type:String,
        required: true
    },
    appLink:{
        type:Boolean,
        default: false
    }
})

export default mongoose.model("SubscribeModel", subscribSchema);