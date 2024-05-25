import { Router } from "express";
import { destroy, get, getAll, create, update } from "../controllers/cars.controller";
import uploadOnMemory from "../middleware/multer";
import { uploadPhoto } from "../middleware/upload-photo";

export const carsRouter = Router();

//only superadmin/admin
carsRouter.post("/cars", uploadOnMemory.single("photo"), uploadPhoto, create);
carsRouter.get("/cars", getAll);
carsRouter.get("/cars/:id", get);
carsRouter.put("/cars/:id", uploadOnMemory.single("photo"), uploadPhoto, update);
carsRouter.delete("/cars/:id", destroy);

//public
carsRouter.get("/cars/available");
