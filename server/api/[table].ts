// server/api/[table].ts
import { getConnection } from "../utils/db";

const ALLOWED_TABLES = new Set([
  "article",
  "bank",
  "cloud",
  "experience",
  "food",
  "host",
  "inventory",
  "mail",
  "member",
  "routine",
  "subscription",
  "video",
]);

export default defineEventHandler(async (event) => {
  const table = event.context.params?.table;

  // ❗ 檢查是否為允許的資料表
  if (!table || !ALLOWED_TABLES.has(table)) {
    return {
      success: false,
      data: null,
      error: `Table "${table}" is not allowed.`,
    };
  }

  try {
    const conn = await getConnection();
    const [rows] = await conn.execute(`SELECT * FROM \`${table}\``);
    await conn.end();

    return {
      success: true,
      data: rows,
      error: null,
    };
  } catch (err: any) {
    return {
      success: false,
      data: null,
      error: err.message || String(err),
    };
  }
});
