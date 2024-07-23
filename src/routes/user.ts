import express from "express";
import { signup } from "../controller/user";
export const userRouter = express.Router();

userRouter.get("/signup", signup);
