const express = require("express");
const formidable = require("express-formidable");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

// link and local port : 
const local = 4000;
const API_KEY = process.env.YOUR_API_KEY;

// initialize server : 
const app = express();
app.use(formidable());
app.use(cors());

// routes : 
app.get("/comics", async (req, res) => {
    const comics_link = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}`
    try {
        const response = await axios.get(comics_link);
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.json(404).status("This route doesn't exist")
    }
});


app.listen(process.env.PORT || local, () => {
    console.log("Server has started 🌪")
});