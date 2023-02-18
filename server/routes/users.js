import { Router } from "express";
import { getReservedRooms, getUser, getUsers, removeUser, updateReserve, updateUser } from "../controllers/users.js";
import { adminAuth } from "../middleware/adminAuth.js";
import { isUserAuth } from "../middleware/isUserAuth.js";
import { userAuth } from "../middleware/userAuth.js";


const router = Router();


router.get("/:id", isUserAuth, getUser);
router.get("/", isUserAuth, getUsers);
router.post("/reservedRooms", getReservedRooms);
router.patch("/reserveRoom", updateReserve);
router.patch("/:id", userAuth, updateUser);
router.delete("/:id", adminAuth, removeUser);



export default router;

