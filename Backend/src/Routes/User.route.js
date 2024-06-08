import { Router } from "express";
import { registerUser, loginUser } from "../Controllers/User.controller.js";

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

export default router;