import { Router } from "express";
import { carsRouter } from "./cars.route";
import { authRouter } from "./auth.route";
import { usersRouter } from "./users.route";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../docs/swagger";

export const router = Router();

router.use("/api", authRouter);
router.use("/api", usersRouter);
router.use("/api", carsRouter);
router.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
