import JWT from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const isUserAuth = (req,res,next) => {
    const { access_token } = req.cookies;
    if(!access_token) return next(createError(401, "There is no access token"));
    JWT.verify(access_token,process.env.SECRET, (err,user) => {
        if(err) return next(createError(401,"token is not valid"));
        if(user) next()
        else return res.status(401).json({message:"no access to other users"})
    })
}