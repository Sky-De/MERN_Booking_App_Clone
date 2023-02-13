import { Router } from "express";
import { getAllSubscribers, removeSubscriber, subscribeByMail } from "../controllers/subscribe.js";


const router = Router();
// needs middle ware
router.get("/", getAllSubscribers);
router.post("/", subscribeByMail);
router.delete("/:id", removeSubscriber);




export default router;

