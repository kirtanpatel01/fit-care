import { Router } from "express";
import { loginUser, registerUser, getProfile, logoutUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multure.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router
    .route("/register")
    .post(upload.single("profileImage"), registerUser);

router.route('/login').post(loginUser);

router.route('/profile').get(verifyJWT, getProfile);

router.route('/logout').post(verifyJWT, logoutUser);

export default router;
