const PORT = 8080;
const express = require("express");
const cors = require("cors");
const axios = require("axios")

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req,res) => {

    const options = {
        method: "GET",
        url: process.env.Base_URL,
        headers: {
          "X-CMC_PRO_API_KEY": process.env.REACT_APP_MARKET_CAP_KEY,
        }
    };

    axios
        .request(options)
        .then((response) => {
            res.json(response.data);
        })
        .catch((error) => {
            res.json(error);
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});         