//ROUTE 4 - GET Product Search Results
//---------------------------------
const router = require("express").Router();
//used to make API requests
const request = require("request-promise");
//requiring index.js file
const ind = require("../index");

// : indicates that productId is dynamic
//async (req , res) is a callback function

router.get("/:searchquery", async (req, res) => {
    //get Productid from parameters
    //productId is going to be populated in req.params
    const { searchQuery } = req.params;

    //try-catch block
    try {
        //response from ScraperAPI

        //s indicates search and '?' is used for the query
        const response = await request(
            `${ind.generateScraperUrl(
                apiKey
            )}&url=https://www.amazon.com/s?k=${searchQuery}`
        );

        //send response back from our server
        res.json(JSON.parse(response));
        //Gives it in JSON format. INSTALL JSON formatter extension IN WEB browser for the same!
        //Makes json look prettier
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
