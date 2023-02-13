import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import subscribeRoute from "./routes/subscribe.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import placesRoute from "./routes/places.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(bodyParser.json({limit:'30mb', extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use(cookieParser())
dotenv.config();
const PORT = process.env.PORT || 2020;

app.get("/",(req,res)=> res.send("Welcome to my server"))
app.use("/api/v1/auth", authRoute );
app.use("/api/v1/hotels", hotelsRoute );
app.use("/api/v1/rooms", roomsRoute );
app.use("/api/v1/users", usersRoute );
app.use("/api/v1/places", placesRoute );
app.use("/api/v1/subscribe", subscribeRoute );

// Err handling middlewares
app.use((err,req,res,next)=> {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";

    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})




// connection to db
mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true , useUnifiedTopology:true })
.then(() => app.listen(PORT, () => console.log(`server is running on PORT : ${PORT}`)))
.catch((err) => console.log(err))



//checks connection status
mongoose.connection.on("connected", () => console.log("mongoDb connected!"));
mongoose.connection.on("disconnected", () => console.log("mongoDb disconnected!"));


