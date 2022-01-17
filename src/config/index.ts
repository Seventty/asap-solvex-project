import dotenv from 'dotenv';

if(process.env.NODE_ENV !== "production"){
  const envFound = dotenv.config();
  if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
  }
}

export default {
  port: parseInt(process.env.SERVERPORT, 10),
  administratorDefaultData: {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PSSWD,
    role: process.env.ADMIN_ROLE,
  },
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
};