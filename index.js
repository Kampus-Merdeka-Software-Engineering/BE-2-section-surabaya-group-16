const express = require("express");
const cors = require('cors')
const unprotectedRoute = require("./routes/unprotected.route");

const app = express();
app.options('*', cors());
app.use(cors({origin: "https://kampus-merdeka-software-engineering.github.io/FE-2-surabaya-16/", credentials:true}))

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

app.get("/test", (req, res) => {
  res.send("Test route");
});

app.use("/", unprotectedRoute);

app.get("/", (req, res) => {
  res.send("Hello World! Hello guyss");
});

app.listen(3000, () => {
  console.log("shunshine i-land server listening on port: ",3000);
});

