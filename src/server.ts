import express from "express";
import { connectDatabase } from "./database";

import "dotenv/config";

import { router } from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(router);

app.use(bodyParser.json());

app.listen(process.env.PORT, async () => {
  try {
    await connectDatabase();
    console.log(`Server running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
