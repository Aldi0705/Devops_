import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env') });

const CONFIG = {
  PORT: process.env.PORT,
  PRIVATE_KEY: process.env.PRIVATE_KEY,
};

export default CONFIG;
