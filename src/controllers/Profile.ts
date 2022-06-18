import { ProfileService } from "@/services/ProfileService";
import { Request, Response } from "express";

export class ProfileController {
  static async postProfile(req: Request, res: Response) {
    res.sendStatus(200);
  }

  static async getProfile(req: Request, res: Response) {
    const profileService = new ProfileService();
    const data = profileService.getProfile(req.params.id, res);
    if (data) {
      (await data).pipe(res);
    } else {
      res.sendStatus(500);
    }
  }
}
