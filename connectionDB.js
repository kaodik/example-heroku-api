const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   port: 5432,
//   password: "",
//   database: "todo",
// });

module.exports = pool;
