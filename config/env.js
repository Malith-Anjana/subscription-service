import { config } from "dotenv";
//NODE_ENV is not set before running. Therefore, process.env.NODE_ENV = undefined then it loads .env.development.local file.
// The file loaded depends on the value of process.env.NODE_ENV when config() runs.
// Setting NODE_ENV in .env itself does not affect which file is loaded, because the selection happens before dotenv reads the file.
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  PORT,
  SERVER_URL,
  NODE_ENV,
  DB_URI,
  JWT_EXPIRES_IN,
  JWT_SECRET,
  ARCJET_KEY,
  ARCJET_ENV,
  QSTASH_CURRENT_SIGNING_KEY,
  QSTASH_URL,
  QSTASH_NEXT_SIGNING_KEY,
  QSTASH_TOKEN,
  EMAIL,
  EMAIL_PASSWORD,
} = process.env;
