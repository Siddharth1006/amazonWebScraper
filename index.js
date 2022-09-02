//Here we make the API
//====================

//express for creating backend application
const express = require("express");
const app = express();

//===============================================================================
const PORT = process.env.PORT || 5000; // PORT for deploying the application
//===============================================================================

//======================================================================================

//helps parse json input
app.use(express.json());

//END POINTS
const productRoute = require("./routes/product");
const productReviewsRoute = require("./routes/productreviews");
const productOffersRoute = require("./routes/productoffers");
const productSearchResultsRoute = require("./routes/productsearchresults");

//every express application needs a route.
app.get("/", (req, res) => {
    res.send("Welcome to AMAZON Scraper API");
});

app.use("/products", productRoute); //Route1
app.use("/products", productReviewsRoute); //Route2
app.use("/products", productOffersRoute); //Route3
app.use("/search", productSearchResultsRoute); //Route4

//====================================================================================
//We need to make our server listen on a specific port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
