const express = require("express");
const pool = require("./connectionDB");
const server = express();

server.use(express.json());

server.post("/create", async (req, res) => {
  const { work } = req.body;
  const response = await pool.query(
    "INSERT INTO task(work,     completed) VALUES($1, $2) returning *",
    [work, false]
  );
  res.json(response.rows[0]);
});

server.get("/read", async (req, res) => {
  const response = await pool.query("SELECT * FROM task");
  res.json(response.rows);
});
server.patch("/update", async (req, res) => {
  const { work } = req.body;
  await pool.query("UPDATE task SET completed = $1 WHERE work = $2", [
    true,
    work,
  ]);
  res.json({ msg: "Task Updated" });
});
server.delete("/delete", async (req, res) => {
  const { work } = req.body;
  await pool.query("DELETE FROM task where work = $1", [work]);
  res.json({ msg: "Task Deleted" });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
