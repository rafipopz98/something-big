import express, { Request, Response } from "express";
import { handleSuccess } from "../middleware/responseHandler";

export const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  return handleSuccess(res, "data", "msg", 200,);
});
