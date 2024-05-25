import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) throw new Error("authorization required");

    const token = bearerToken.split("Bearer ")[1];
    const tokenPayload = verify(token, "cakrasignature");

    // req.user = findUserById(tokenPayload.id)

    next();
  } catch (err: any) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
