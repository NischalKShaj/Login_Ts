import express from "express";
import userController from "../Controller/userController";

const router = express.Router();

router.get("/", userController.getLogin);
router.post("/logout",userController.logoutHome)
router.post("/login", userController.postLogin);
router.get("/signup", userController.getSignUp);
router.post("/home", userController.postHome);
router.get("/home", userController.getLogin);

export default router;
