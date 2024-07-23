import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.set("timestamps", {
  createdAt: "created_time",
  updatedAt: "updated_time",
});

export const userModel = mongoose.model("user", userSchema);
