import { Router } from "express";
import { login, register, whoami } from "../controllers/auth.controller";
import { authorize } from "../middleware/authorize";

export const authRouter = Router();

authRouter.post("/auth/login", login);
authRouter.post("/auth/register", register);
authRouter.get("/auth/whoami", (req, res, next) => authorize(req, res, next), whoami);
