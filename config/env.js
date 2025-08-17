import { config } from'dotenv';
//NODE_ENV is not set before running. Therefore, process.env.NODE_ENV = undefined then it loads .env.development.local file.
// The file loaded depends on the value of process.env.NODE_ENV when config() runs.
// Setting NODE_ENV in .env itself does not affect which file is loaded, because the selection happens before dotenv reads the file.
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV } = process.env;
