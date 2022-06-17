import env from "@/config/env";
import { connect } from "mongoose";

import { GridFsStorage } from "multer-gridfs-storage";

export const gridFsStorage = () => {
  const storage = new GridFsStorage({
    db: connect(env.mongoose.uri, { dbName: "gridfs" }),
    file: (req, file) => ({
      filename: `${file.originalname}_${Date.now()}`,
      bucketName: "uploads",
      metadata: { uploadedBy: req.query.user },
    }),
  });

  return storage;
};
