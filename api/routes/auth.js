import express from "express";
import {
  loginUserController,
  logoutUserController,
  registerUserController,
} from "../controllers/authController.js";

const router = express.Router();

//register new user
router.post("/register", registerUserController);
router.post("/login", loginUserController);
router.post("/logout", logoutUserController);

export default router;
