import { ProfileController } from "@/controllers";
import { gridFsStorage } from "@/middleware";
import { Router } from "express";
import multer from "multer";

const profileRoutes = Router();

let storage = gridFsStorage();
const upload = multer({ storage });

profileRoutes.post("/", upload.single("file"), ProfileController.postProfile);

profileRoutes.get("/:id", ProfileController.getProfile);

export { profileRoutes };
