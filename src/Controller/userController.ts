import { Request, Response } from "express";
import { UserModel } from "../models/user";

class UserController {
  // for getting the first login page
  getLogin = (req: Request, res: Response): void => {
    try {
      let user = (req.session as any).user;
      console.log(user);
      let message = null;
      if (user !== undefined && user !== null) {
        res.render("home");
      } else {
        res.render("login", { message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // for getting the signup page
  getSignUp = (req: Request, res: Response): void => {
    try {
      let message = null;
      res.render("signup", { message });
    } catch (error) {
      console.log(error);
    }
  };

  //  for posting the loginpage after getting all the values
  postLogin = async (req: Request, res: Response): Promise<void> => {
    try {
      let message;
      const userCollection = await UserModel.findOne({ email: req.body.email });
      if (userCollection && userCollection.email === req.body.email) {
        message = "User already registered";
        res.render("signup", { message });
      } else {
        const userDetail = new UserModel({
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
    } catch (error) {
      console.log("error", error);
      res.redirect("/login");
    }
  };

  //posting the home page
  postHome = async (req: Request, res: Response): Promise<void> => {
    try {
      const userDetail = await UserModel.findOne({ email: req.body.email });
      if (
        userDetail &&
        userDetail.email === req.body.email &&
        userDetail.password === req.body.password
      ) {
        (req.session as any).user = userDetail.email;
        res.render("home");
      } else {
        let message = "Invalid credentials";
        res.render("login", { message });
      }
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }
  };

  // controller for logout
  logoutHome = async (req: Request, res: Response): Promise<void> => {
    try {
      req.session.destroy(function (err) {
        if (err) {
          console.log(err);
          res.send("Error");
        } else {
          console.log("logout successful");
          res.status(200).send("Okay");
        }
      });
    } catch (error) {
      console.error("error while removing the session", error);
    }
  };
}

export default new UserController();
