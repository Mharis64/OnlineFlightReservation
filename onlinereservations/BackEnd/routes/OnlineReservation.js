import { Express } from "express";
import { createRequest, getRequests } from "../controllers/OnlineReservation.js";

const router=express.Router();

router.get("/", getRequests)


router.post("/", createRequest)