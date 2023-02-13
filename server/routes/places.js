import { Router } from "express";
import { createPlace, getPlace, getPlaces, getPopularPlaces, removePlace, updatePlace } from "../controllers/places.js";
import { adminAuth } from "../middleware/adminAuth.js";


const router = Router();

router.get("/popularPlaces", getPopularPlaces);
router.get("/:id", getPlace);
router.get("/", getPlaces);
router.post("/", adminAuth, createPlace);
router.patch("/:id", adminAuth, updatePlace);
router.delete("/:id", adminAuth, removePlace);

export default router;