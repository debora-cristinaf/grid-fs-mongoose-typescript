import mongoose from "mongoose";
import { Response } from "express";

export class ProfileService {
  public async getProfile(id: string, res: Response) {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "uploads",
    });

    try {
      const _id = new mongoose.Types.ObjectId(id);
      const cursor = bucket.find({ _id });
      const filesMetadata = await cursor.toArray();

      if (!filesMetadata.length) throw new Error("Not a file");

      return bucket.openDownloadStream(_id);
    } catch (err: any) {
      throw new Error(`Error: ${err.message}`);
    }
  }
}
