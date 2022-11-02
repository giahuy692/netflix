const express = require("express");
const app = express();

const db = require("./config/database");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

db.connect();

app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
