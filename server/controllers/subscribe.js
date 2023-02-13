import SubscribeModel from "../models/SubscribeModel.js";



export const subscribeByMail = async (req,res,next) => {
    const {subscribeMail,appLink} = req.body;
    const subscriber =  new  SubscribeModel({subscribeMail,appLink});
    try {
        await subscriber.save()
        res.status(201).json({message:"new subscriber added"});
    } catch (err) {
        next(err)
    }
}

export const getAllSubscribers = async (req,res,next) => {
    try {
        const subscribers = await SubscribeModel.find()
        res.status(201).json(subscribers);
    } catch (err) {
        next(err)
    }
}

export const removeSubscriber = async (req,res,next) => {
    const { id } = req.params;
    console.log(id);
    try {
        await SubscribeModel.findByIdAndRemove(id)
        res.status(201).json({message: `Subscriber with ID : ${id} removed!`});
    } catch (err) {
        next(err)
    }
}