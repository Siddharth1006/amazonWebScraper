//here we make the API

//express for creating backend application
const express = require("express");

//used to make API requests
const request = require("request-promise");

//importing the dotenv file for fetching the secure url for connection to database
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000; // PORT for deploying the application

const baseUrl = `http://api.scraperapi.com?api_key=${process.env.API_KEY}&autoparse=true`;

//helps parse json input
app.use(express.json());

//every express application needs a route.
app.get("/", (req, res) => {
    res.send("Welcome to AMAZON Scraper API");
});

//GET Product Details
// : indicates that productId is dynamic
//async (req , res) is a callback function
app.get("/products/:productId", async (req, res) => {
    //get Productid from parameters
    //productId is going to be populated in req.params
    const { productId } = req.params;

    //try-catch block
    try {
        //response from ScraperAPI
        const response = await request(
            `${baseUrl}&url=https://www.amazon.com/dp/${productId}`
        );

        //send response back from our server
        res.json(response);
    } catch (err) {
        res.json(err);
    }
});

//We need to make our server listen on a specific port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
