var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

app.listen(9999);
app.use("/book", require("./book"));
