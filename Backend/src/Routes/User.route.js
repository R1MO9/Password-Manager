import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../Controllers/User.controller.js";
import { saveSitePassword, getSitePassword, removeSitePassword } from "../Controllers/Site.controller.js"
import { get } from "mongoose";

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/save-password', saveSitePassword);

router.get('/get-passwords', getSitePassword);

router.delete('/remove-password', removeSitePassword);

router.post('/logout', logoutUser);

export default router;