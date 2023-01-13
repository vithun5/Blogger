import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
const app = express();
const dotenv = require("dotenv");
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

//heroku
const PORT = process.env.PORT || 5000;

dotenv.config({ path: "./config.env" });
mongoose
  .connect(process.env.DATABASE)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected to Database and listening to localhost 5000")
  )
  .catch((err) => console.log("Error"));

//step heroku
if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}
