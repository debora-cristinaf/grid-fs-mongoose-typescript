import express from "express";
import { connectDatabase } from "./database";

import "dotenv/config";

import { router } from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(router);

app.use(bodyParser.json());

// app.post("/photos/upload", upload.array("photos", 12), (req, res, next) => {
//   res.send(200);
// });

// app.post(
//   "/cool-profile",
//   upload.fields([
//     { name: "avatar", maxCount: 1 },
//     { name: "gallery", maxCount: 8 },
//   ]),
//   (req, res, next) => {
//     res.send(200);
//   }
// );

// app.get("/file/:id", async (req, res) => {
//   try {
//     const _id = new mongoose.Types.ObjectId(req.params.id);

//     const cursor = bucket.find({ _id });
//     const filesMetadata = await cursor.toArray();
//     if (!filesMetadata.length) return res.json({ err: "Not a File!" });

//     bucket.openDownloadStream(_id).pipe(res);
//   } catch (err) {
//     res.json({ err: `Error: ${err.message}` });
//   }
// });

app.listen(process.env.PORT, async () => {
  try {
    await connectDatabase();

    // bucket = new mongo.GridFSBucket(mongoose.connection.db, {
    //   bucketName: "uploads",
    // });

    // upload = multer({ storage });

    console.log(`Server running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
