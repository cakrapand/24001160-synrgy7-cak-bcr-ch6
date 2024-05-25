import { Router } from "express";
import { create } from "../controllers/users.controller";
import { authorize } from "../middleware/authorize";

export const usersRouter = Router();

usersRouter.post("/users", authorize, create);
