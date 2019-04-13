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
    phone: "452-452-6524",
    success: true
  }];

var waitList = [{
  table: "Waitlist #1",
  id: "Camwait",
  name: "Cameron",
  email: "Cameron@email.com",
  phone: "555-867-5309",
  success: false
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
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitList);
});

app.post("/api/tables", function (req, res) {
  if (tables.length <= 5){
  var newTable = req.body;
   newTable.success = true;
  // newTable.routename = newTable.name.replace("/\s+g").tolowerCase();
  console.log(newTable);
  tables.push(newTable);
  res.json(newTable);
  } else {
    var newTable = req.body;
    newTable.success = false;
  // newTable.routename = newTable.name.replace(/\s+/g, "").toLowerCase();
  console.log(newTable);
  waitList.push(newTable);
  res.json(newTable);
  }
});