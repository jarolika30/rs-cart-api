import { Pool } from 'pg';

const {
  DB_PASSWORD,
  DB_USERNAME,
  DB_NAME,
  DB_PORT,
  DB_HOST,
} = process.env;

const options = {
  host: DB_HOST,
  port: Number(DB_PORT),
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 10000,
};

console.log('DB Connection Option: ', options);

let pool;

export const query_db = async (query: string) => {
  if (!pool) {
    pool = new Pool(options);
  }
  const client = await pool.connect();

  try {
    return await client.query(query);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};
