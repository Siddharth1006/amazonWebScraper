//Here we make the API
//====================

//express for creating backend application
const express = require("express");

//importing the dotenv file for storing the important keys
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//===============================================================================
const PORT = process.env.PORT || 5000; // PORT for deploying the application
//===============================================================================

const baseUrl = `http://api.scraperapi.com?api_key=${process.env.API_KEY}&autoparse=true`;
exports.baseUrl = baseUrl; //exporting this variable

//======================================================================================

//helps parse json input
app.use(express.json());

//END POINTS
const productRoute = require("./routes/product");
const productReviewsRoute = require("./routes/productreviews");
const productOffersRoute = require("./routes/productoffers");

//every express application needs a route.
app.get("/", (req, res) => {
    res.send("Welcome to AMAZON Scraper API");
});

app.use("/products", productRoute);
app.use("/products", productReviewsRoute);
app.use("/products", productOffersRoute);

//====================================================================================
//We need to make our server listen on a specific port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
