const express = require("express");
const formidable = require("express-formidable");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

// link and local port : 
const local = 4000;
const API = process.env.API_KEY;

// initialize server : 
const app = express();
app.use(formidable());
app.use(cors());

// routes : 
// all comics :
app.get("/comics", async (req, res) => {
    try {
        const comics_link = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API}`
        const response = await axios.get(comics_link);
        res.json(response.data);
    } catch (error) {
        res.json(error.message)
    }
});

// all characters :
app.get("/characters", async (req, res) => {
    try {
        const characters_id = `https://lereacteur-marvel-api.herokuapp.com/characters?limit100=&page=${page}?apiKey=${API}`
        const response = await axios.get(characters_id);
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.json("This route doesn't exist")
    }
});

// List of comics containing a specific character :
app.get("/comics/:characterId", async (req, res) => {
    try {
        const id = req.params.characterId
        const comics_charact_link = `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${API}`
        const response = await axios.get(comics_charact_link);
        res.json(response.data);
    } catch (error) {
        res.json(error.message)
    }
});
// The infos of a specific character :
app.get("/character/:characterId", async (req, res) => {
    try {
        const id = req.params.characterId
        const comics_charact_link = `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${API}`
        const response = await axios.get(comics_charact_link);
        res.json(response.data);
    } catch (error) {
        res.json(error.message)
    }
});

app.listen(process.env.PORT || local, () => {
    console.log("Server has started 🌪")
});