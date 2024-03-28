import { config } from 'dotenv';
config({ path: `.env` });

//set all env defaults values here
export const CREDENTIALS = process.env.CREDENTIALS == 'true';
export const {
  NODE_ENV = 'development',
  PORT = 3000,
  TLS_ENABLE,
  DB_PATH,
  TEST_DB_PATH,
  SECRET_KEY,
  LOG_DIR,
  LOGGER_LEVEL,
  ORIGIN
} = process.env;
