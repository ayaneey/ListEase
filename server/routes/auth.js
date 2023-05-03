import express from "express";
import { Register, SignIn } from "../controllers/Auth.js";

const router = express.Router();

//CREATE A USER
router.post("/signUp", Register);

//SIGN IN

router.post("/signin", SignIn);

// //GOOGLE AUTH
// router.post("/google", googleAuth);

// //LOT CREATION
// router.post("/lots", lots);

// //veryfy OTP
// router.post("/verify", verify);

// //SEND OTP
// router.post("/SendOtb", SendOtb);

export default router;
