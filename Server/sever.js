var http = require("http");

var express = require("express");

var app = express();

app.use(express.static("./public"));

var sever = http.createServer(app);

sever.listen(3000);

console.log("Servidor online...");