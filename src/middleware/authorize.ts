import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getById } from "../services/users.service";
import { UsersModel } from "../models/users";
import { IJWTPayload } from "../interfaces/jwt.interface";

declare module "express-serve-static-core" {
  interface Request {
    user?: UsersModel;
  }
}

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) throw new Error("authorization required");

    const token = bearerToken.split("Bearer ")[1];
    const tokenPayload = verify(token, "THIS SECRET SIGNATURE SHOULDNT BE EXPOSE") as IJWTPayload;

    const user = await getById(tokenPayload.id);

    req.user = user;

    next();
  } catch (err: any) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
