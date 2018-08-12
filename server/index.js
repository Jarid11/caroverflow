require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const app = express();
let port = process.env.PORT || 3030;

app.use(json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
