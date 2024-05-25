import { Router } from "express";
import { carsRouter } from "./cars.route";
import { authRouter } from "./auth.route";
import { usersRouter } from "./users.route";

export const router = Router();

router.use("/api", authRouter);
router.use("/api", usersRouter);
router.use("/api", carsRouter);
