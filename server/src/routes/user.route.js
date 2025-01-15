import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multure.middleware.js"

const router = Router();

router
    .route("/register")
    .post(upload.single("profileImage"), registerUser);

export default router;