const express = require("express");

const app = express();

app.use(express.json());

const insert = require("./routes/insert");

app.listen(3000, () => {
  console.log(`server is running on le port 3000`);
});

app.post("/insert", insert.post);

module.exports = { app };

export {};
