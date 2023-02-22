import express from "express";
import {
    countByCity,
    countByType,
    createCinema,
    deleteCinema,
    getCinema,
    getCinemas,
    updateCinema,
} from "../controllers/Cinema.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, verifyAdmin, createCinema);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateCinema);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteCinema);
//GET
router.get("/find:id", verifyToken, getCinema);
//GET All
router.get("/", getCinemas);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;
