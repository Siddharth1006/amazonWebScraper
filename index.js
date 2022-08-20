//here we make the API

//express for creating backend application
const express = require("express");

//used to make API requests
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000; // PORT for deploying the application

//helps parse json input
app.use(express.json());

//every express application needs a route.
app.get("/", (req, res) => {
    res.send("Welcome to AMAZON Scraper API");
});

//We need to make our server listen on a specific port
app.listen(PORT , () => console.log(`Server running on port ${PORT}`));
