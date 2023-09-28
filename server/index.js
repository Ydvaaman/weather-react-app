const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const weatherRoute = require("./routes/weatherRoute");

app.use(cors());
app.use("/api", weatherRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Weather API" });
});
app.listen(3001, () => {
  console.log("server is running");
});
