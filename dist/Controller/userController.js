"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UserController {
    // for getting the first login page
    getLogin = (req, res) => {
        try {
            let message = null;
            res.render("login", { message });
        }
        catch (error) {
            console.log(error);
        }
    };
    // for getting the signup page
    getSignUp = (req, res) => {
        try {
            let message = null;
            res.render("signup", { message });
        }
        catch (error) {
            console.log(error);
        }
    };
    //  for posting the loginpage after getting all the values
    postLogin = async (req, res) => {
        try {
            let message;
            const userCollection = await user_1.UserModel.findOne({ email: req.body.email });
            if (userCollection && userCollection.email === req.body.email) {
                message = "User already registered";
                res.render("signup", { message });
            }
            else {
                const userDetail = new user_1.UserModel({
                    first_Name: req.body.first_Name,
                    last_Name: req.body.last_Name,
                    email: req.body.email,
                    phone: req.body.phone,
                    password: req.body.password,
                });
                await userDetail.save();
                console.log(userDetail);
                res.redirect("/");
            }
        }
        catch (error) {
            console.log("error", error);
            res.redirect("/login");
        }
    };
    //posting the home page
    postHome = async (req, res) => {
        try {
            let message;
            const userDetail = await user_1.UserModel.findOne({ email: req.body.email });
            if (userDetail &&
                userDetail.email === req.body.email &&
                userDetail.password === req.body.password) {
                req.session.user = userDetail.email;
                // console.log(req.session.user);
                res.render("home");
            }
            else {
                message = "Invalid credentials";
                res.render("login", { message });
            }
        }
        catch (error) {
            console.log(error);
            res.redirect("/");
        }
    };
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map