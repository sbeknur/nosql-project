import express from "express";
import {
    createMovie,
    deleteMovie,
    getMovie,
    getMovies,
    updateMovie,
} from "../controllers/Movie.js";
import { verifyToken, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, verifyAdmin, createMovie);
//UPDATE
router.put("/:id", verifyToken, verifyAdmin, updateMovie);
//DELETE
router.delete("/:id", verifyToken, verifyAdmin, deleteMovie);
//GET
router.get("/:id", getMovie);
//GET All
router.get("/", getMovies);

export default router;
