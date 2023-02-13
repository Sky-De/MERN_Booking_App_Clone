

import { Router } from "express";
import { getRooms , getRoom, createRoom, deleteRoom, updateRoom, getRoomBookedDates, updateRoomBookedDates } from "../controllers/rooms.js";
import { adminAuth } from "../middleware/adminAuth.js"


const router = Router();

// GET ONE
router.get("/", getRooms);
router.get("/bookedDates/:id", getRoomBookedDates);
// GET ALL
router.get("/:id", getRoom);
// CREATE
router.post("/:hotelid", adminAuth, createRoom);    
// UPDATE
router.patch("/:id", adminAuth, updateRoom);
router.patch("/bookedDates/:id", updateRoomBookedDates);
// DELETE
router.delete("/:id/:hotelid", adminAuth, deleteRoom);

export default router;