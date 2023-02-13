import JWT from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const userAuth = (req,res,next) => {
    const { access_token } = req.cookies;
    if(!access_token) return next(createError(401, "There is no access token"));
    JWT.verify(access_token,process.env.SECRET, (err,user) => {
        if(err) return next(createError(401,"token is not valid"));
        // console.log(`req.params : ${req.params.id}`);
        // console.log(`user.id : ${user.id}`);
        // console.log(user.id === req.params);
        // console.log(`user.isAdmin : ${user?.isAdmin}`);
        if(req.params.id === user.id || user.isAdmin) next();
        else return res.status(401).json({message:"no access to other users"});
    })
}