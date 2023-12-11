const express = require("express");
const unprotectedRoute = require("./routes/unprotected.route");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// })

app.use('/external-server', createProxyMiddleware({ target: 'https://successful-clothes-ox.cyclic.app', changeOrigin: true }));

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
