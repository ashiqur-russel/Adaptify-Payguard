import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_secret_expires: process.env.JWT_ACCESS_EXPIRATION,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_secret_expires: process.env.JWT_REFRESH_EXPIRATION,
  environment: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.SALT,
  supabase_project_url: process.env.SUPABASE_PROJECT_URL,
  supabase_api_key: process.env.SUPABASE_API_KEY,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
};
