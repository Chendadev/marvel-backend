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
    try {
        const comics_link = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}`
        const response = await axios.get(comics_link);
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(404).json("This route doesn't exist")
    }
});
app.get("/characters", async (req, res) => {
    try {
        const characters_id = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API_KEY}`
        const response = await axios.get(characters_id);
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(404).json("This route doesn't exist")
    }
});

app.get("/comics/:characterId", async (req, res) => {
    try {
        const { id } = req.params
        const comics_charact_link = `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${API_KEY}`
        const response = await axios.get(comics_charact_link);
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(404).json("This route doesn't exist")
    }
});

app.listen(process.env.PORT || local, () => {
    console.log("Server has started 🌪")
});