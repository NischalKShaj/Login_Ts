import express from "express";
import userController from "../Controller/userController";

const router = express.Router();

router.get("/", userController.getLogin);
router.post("/login", userController.postLogin);
router.get("/signup", userController.getSignUp);
router.post("/home", userController.postHome);

export default router;
