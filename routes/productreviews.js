//ROUTE 1 - GET Product Details
//---------------------------------
const router = require("express").Router();
//used to make API requests
const request = require("request-promise");
//importing the "baseUrl" variable from index.js file
const { baseUrl } = require("../index");

// : indicates that productId is dynamic
//async (req , res) is a callback function

router.get("/:productId/reviews", async (req, res) => {
    //get Productid from parameters
    //productId is going to be populated in req.params
    const { productId } = req.params;

    //try-catch block
    try {
        //response from ScraperAPI
        const response = await request(
            `${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`
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
