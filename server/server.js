const { application } = require("express");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Recipe = require('./models/recipe');

require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://BenS213:${process.env.MONGODB_PASS}@cluster0.d0omwyo.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected!"));

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT);

const recipe = new Recipe({
    title: 'test description',
    description: "test description",
    ingredients: ["orange", "lime"],
    instructions: 'test instructions',
})

recipe.save();