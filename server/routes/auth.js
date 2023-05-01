import express from "express";
import { Register } from "../controllers/Auth.js";

const router = express.Router();

// //CREATE A USER
// router.post("/signup", signup);

//SIGN IN
router.post("/signUp", Register);

// //GOOGLE AUTH
// router.post("/google", googleAuth);

// //LOT CREATION
// router.post("/lots", lots);

// //veryfy OTP
// router.post("/verify", verify);

// //SEND OTP
// router.post("/SendOtb", SendOtb);

export default router;
