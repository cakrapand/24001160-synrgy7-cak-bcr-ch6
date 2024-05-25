import { Router } from "express";
import { login } from "../controllers/auth.controller";

export const authRouter = Router();

//only superadmin/admin
authRouter.post("/auth/login", login);

//public
authRouter.post("/auth/register");

//logged in
authRouter.post("/auth/whoami");
