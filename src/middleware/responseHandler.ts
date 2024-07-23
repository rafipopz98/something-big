import { Request, Response } from "express";

// Function to handle success responses
export const handleSuccess = (
  res: Response,
  data: any,
  message: string = "Success",
  statusCode: number = 200
) => {
  return res.status(statusCode).json({ status: true, message, data });
};

// Function to handle create successfull responses
export const createdSuccessfully = (
  res: Response,
  data: any,
  message: string = "Created Successfully",
  statusCode: number = 201
) => {
  return res.status(statusCode).json({ status: true, message, data });
};

// Function to 400 bad request
export const badRequest = (
  res: Response,
  error: any,
  message: string = "Bad Request",
  statusCode: number = 400
) => {
  return res.status(statusCode).json({ status: false, message, error });
};

// Function to 500 bad request
export const internalServerError = (
  res: Response,
  error: any,
  message: string = "Internal Server",
  statusCode: number = 500
) => {
  return res.status(statusCode).json({ status: false, message, error });
};

// Function to validation error
export const validationError = (
  res: Response,
  error: any,
  message: string = "Validation Request",
  statusCode: number = 400
) => {
  return res.status(statusCode).json({ status: false, message, error });
};

// Duplicate error
export const duplicateError = (
  res: Response,
  error: any,
  message: string = "Duplicate Key Error",
  statusCode: number = 409
) => {
  return res.status(statusCode).json({ status: false, message, error });
};

// 404 error
export const alreadyExist = (
  res: Response,
  error: any,
  message: string = "Data Already Exists",
  statusCode: number = 404
) => {
  return res.status(statusCode).json({ status: false, message, error });
};
