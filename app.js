const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan")
const bookmarksController = require("./controllers/bookmarksControllers.js")

// MIDDLEWARE
app.use(express.json());

// Every back end request is accepted, with below.
app.use(cors());

app.use(logger('dev'))
// /bookmarks is the base url endpoint for the routes
// middleware
app.use("/bookmarks",bookmarksController)
//separation of concerns




app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the Bookmarks App");
})

//404 page
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
})

module.exports = app;

// npm i cors
