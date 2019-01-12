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
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../reservation.html"));
  });

 app.get("/tables", function(req,res){
   res.sendFile(path.join(__dirname, "../tables.html"));
 });


 app.post("/api/reservations",function(req,res){
   var newReservation = req.body;

   newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

   console.log(newReservation);

   reservations.push(newReservation);
   res.json(reservations);
 });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });