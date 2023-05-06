import express from "express";
import { Update } from "../controllers/User.js";

const router = express.Router();

//UPDATE USER INFO
router.put("/update/:id", Update);

export default router;
