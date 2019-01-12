var express = require("express");
var path = require("path");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../tables.html"));
  });
 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });