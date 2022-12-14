//ROUTE 1 - GET Product Details
//---------------------------------
const router = require("express").Router();
//used to make API requests
const request = require("request-promise");
const apikey = '18257f0f78fb8abb4463a1fae1c9978a';

const baseUrl = `http://api.scraperapi.com?api_key=${apikey}&autoparse=true`;

// : indicates that productId is dynamic
//async (req , res) is a callback function

router.get("/:productId", async (req, res) => {
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
        res.json(JSON.parse(response));
        //Gives it in JSON format. INSTALL JSON formatter extension IN WEB browser for the same!
        //Makes json look prettier
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
