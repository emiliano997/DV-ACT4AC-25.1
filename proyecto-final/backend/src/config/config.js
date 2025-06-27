import { config } from "dotenv";

config();

const env = process.env;

export const CONFIG = {
  PORT: env.PORT || 5000,
  DATABASE: {
    URL: env.DATABASE_URL,
  },
  JWT: {
    SECRET: env.JWT_SECRET,
    EXPIRES_IN: env.JWT_EXPIRES_IN || "1h",
  },
};
