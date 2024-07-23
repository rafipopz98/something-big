import express, { NextFunction, Request, Response } from "express";
import { userRouter } from "./src/routes/user";
import { connectDB } from "./src/config/connectDB";
import { PORT } from "./src/config/config";

const app = express();
connectDB();
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log("listenig ");
});
