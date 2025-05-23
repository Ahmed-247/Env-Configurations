import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import taskRoute from "./routes/taskRoute.js";
import loggerr from "./middlewares/logger.js"
import errorhandler from "./middlewares/errorhandler.js"
import {mongodb_url, port} from "./Utils/config.js";


const app = express();
app.use(express.json());
app.use(loggerr)

mongoose.connect(mongodb_url);

mongoose.connection.once("connected", ()=> console.log("Databse Connected"));
mongoose.connection.on("err", ()=> console.log("Connection Failed"));

app.use("/", userRoute, taskRoute);

app.use(errorhandler)

app.listen(port);