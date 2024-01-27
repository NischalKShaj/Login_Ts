import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import databaseConnection from "./Database/connection";

databaseConnection
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const app = express();

app.use(
  cors({
    credentials: true,
  })
);


app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("server running on http://localhost:4000/");
});
