import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.POSTGRES_URL,
});

// const pool = new pg.Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})

export default pool;