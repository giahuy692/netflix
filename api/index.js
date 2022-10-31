const express = require("express");
const app = express();

const db = require("./config/database");
const authRoute = require("./routes/auth");

db.connect();

app.use(express.json());


app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
