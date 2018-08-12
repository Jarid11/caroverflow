require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const app = express();
let port = process.env.PORT || 3030;

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
