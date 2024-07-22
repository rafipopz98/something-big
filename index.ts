import express, { NextFunction, Request, Response } from "express";
import { userRouter } from "./src/router/user";

const app = express();

app.use("/", userRouter);

app.listen(8080, () => {
  console.log("listenig ");
});
