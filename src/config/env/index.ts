import "dotenv/config";

const app = {
  port: process.env.PORT,
};

const mongoose = {
  uri: process.env.MONGO_URL!,
};

const env = {
  app,
  mongoose,
};

export default Object.freeze(env);
