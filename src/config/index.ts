import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.MONGO_URI,
  jwt_secret_key: process.env.JWT_SECRET,
  salt: process.env.SALT,
};
