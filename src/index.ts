import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import path from "path";
import session from "express-session";
import databaseConnection from "./Database/connection";
import userRoutes from "./routes/userRoutes";

databaseConnection
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const app = express();

// setting the view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting the public folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());

// Use body-parser middleware for URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("server running on http://localhost:3000/");
});
