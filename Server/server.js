var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../reservation.html"));
  });

 app.get("/tables", function(req,res){
   res.sendFile(path.join(__dirname, "../tables.html"));

  
 });

 app.get("/api/reservations", function(req, res) {
  return res.json(new Array (reservations,waitlist));
});

app.get("/api/tables", function(req, res) {
  res.json(reservations);
});
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});



 app.post("/api/reservations",function(req,res){
   var newReservation = req.body;

   newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

   console.log(newReservation);

   if (reservations.length < 5){
   reservations.push(newReservation);
   res.json(true);
   
   }else{
     waitlist.push(newReservation);
     res.json(false);
   }

   
 });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });