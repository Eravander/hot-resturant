// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//variable storage
var tables = [
  {
    table: "Table #1",
    id: "EdWinner",
    name: "Edwin Gonzalez",
    email: "Edwin@email.com",
    phone: "452-452-6524"
  }];

var waitList = [{
  table: "",
  id: "",
  name: "",
  email: "",
  phone: "0"
}];

var reserveData = [tables, waitList];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(reserveData);
});

app.post("/", function (req, res) {
  if (tables.length <= 5){
  var table = req.body;
  newtable.routename = newtable.name.replace("/\s+g").tolowerCase();
  console.log(newtable);
  tables.push(newtable);
  res.json(newtable);
  alert("You have reserved your table!")
  } else {
    var table = req.body;
  newtable.routename = newtable.name.replace("/\s+g").tolowerCase();
  console.log(newtable);
  waitList.push(newtable);
  res.json(newtable);
  alert("We are booked up! But we have placed you on the waiting list.")
  }
});