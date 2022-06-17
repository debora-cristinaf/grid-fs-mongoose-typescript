import { Router } from "express";
import { profileRoutes } from "./Profile";

const router = Router();

router.use("/profile", profileRoutes);

export { router };
