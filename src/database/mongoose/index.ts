import env from "@/config/env";
import { Mongoose } from "mongoose";

export const connectionGrifs = new Mongoose();

export const connectDatabase = async () => {
  return await connectionGrifs.connect(env.mongoose.uri, { dbName: "gridfs" });
};
