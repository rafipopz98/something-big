import { Request, Response } from "express";
import {
  alreadyExist,
  createdSuccessfully,
  duplicateError,
  internalServerError,
} from "../middleware/responseHandler";
import { userModel } from "../model/user";
import bcrypt from "bcryptjs";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  //   do validation...
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return duplicateError(res, "User already exist");
    }
    const hashedPassword = await hashedPasswordfn(password);
    const newUser = new userModel({ username, email, hashedPassword });
    const data = await newUser.save();
    createdSuccessfully(res, data, "User Created Successfully", 201);
  } catch (error) {
    console.log("Error while signing up new user", error);
    return internalServerError(res, error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  //   do validation...
  try {
    const user = await userModel.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    createdSuccessfully(res, user, "User Created Successfully", 201);
  } catch (error) {
    console.log("Error while signing up new user", error);
    return internalServerError(res, error);
  }
};
const hashedPasswordfn = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

