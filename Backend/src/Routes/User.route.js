import { Router } from "express";
import { registerUser, loginUser } from "../Controllers/User.controller.js";
import { saveSitePassword } from "../Controllers/Site.controller.js"

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/saveSitePassword', saveSitePassword);


export default router;