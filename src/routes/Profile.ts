import { gridFsStorage } from "@/middleware";
import { Router } from "express";
import multer from "multer";

const profileRoutes = Router();

let storage = gridFsStorage();
const upload = multer({ storage });

profileRoutes.post(
  "/",
  upload.single("file"),
  async (req: any, res: { sendStatus: (arg0: number) => void }, next: any) => {
    res.sendStatus(200);
  }
);

export { profileRoutes };
