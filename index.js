const express = require("express");
const cors = require('cors')
const unprotectedRoute = require("./routes/unprotected.route");

const app = express();

app.use(cors({origin: ["http://127.0.0.1:5500"]}))

//Parsing body to JSON
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

//Testing routes
app.get("/test", (req, res) => {
  console.log(req.body)
  res.send("Test route");
});

//Routes for unprotected routes
app.use("/", unprotectedRoute);

//hello world
app.get("/", (req, res) => {
  res.send("Hello World! Hello guyss");
});

//Start the server
app.listen(3000, () => {
  console.log("shunshine i-land server listening on port: ",3000);
});

