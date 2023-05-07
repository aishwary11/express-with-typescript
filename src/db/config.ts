import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'NewDB',
  password: 'aish',
  port: 5432
});
pool.connect();
export const poolQuery = (queries: string, value?: any[] | undefined) => pool.query(queries, value).then(result => result.rows).catch(err => err.stack);