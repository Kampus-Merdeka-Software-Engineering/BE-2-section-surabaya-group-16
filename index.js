const express = require("express");
const cors = require("cors");
const unprotectedRoute = require("./routes/unprotected.route");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST", "GET", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})


app.get("/test", (req, res) => {
  res.send("Test route");
});

app.use("/", unprotectedRoute);

app.get("/", (req, res) => {
  res.send("Hello World! Hello guyss");
});

app.listen(3000, () => {
  console.log("shunshine i-land server listening on port: ", 3000);
});
