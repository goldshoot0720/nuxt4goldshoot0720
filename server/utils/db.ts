import mysql from "mysql2/promise";
import { useRuntimeConfig } from "#imports";

export const getConnection = async () => {
  const config = useRuntimeConfig();

  return await mysql.createConnection({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASS,
    database: config.DB_NAME,
    port: Number(config.DB_PORT),
    ssl: {
      rejectUnauthorized: false,
    },
    connectTimeout: 10000, // 連線逾時時間設定為 10 秒 (10000 毫秒)
  });
};
