import { Router } from "express";
import { destroy, get, getAll, create, update, available } from "../controllers/cars.controller";
import uploadOnMemory from "../middleware/multer";
import { uploadPhoto } from "../middleware/upload-photo";
import { authorize } from "../middleware/authorize";

export const carsRouter = Router();

carsRouter.get("/cars/available", available);
carsRouter.post("/cars", authorize, uploadOnMemory.single("photo"), uploadPhoto, create);
carsRouter.get("/cars", authorize, getAll);
carsRouter.get("/cars/:id", authorize, get);
carsRouter.put("/cars/:id", authorize, uploadOnMemory.single("photo"), uploadPhoto, update);
carsRouter.delete("/cars/:id", authorize, destroy);
