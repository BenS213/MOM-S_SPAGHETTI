// const { application } = require("express");
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Recipe from "./models/Recipe.js";
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/recipes", async (req, res) => {
  const newRecipe = new Recipe({
    title: req.body.title
  });
  const createdRecipe = await newRecipe.save();
  res.json(createdRecipe)
});

mongoose
  .connect(
    `mongodb+srv://Ben:${process.env.MONGODB_PASS}@cluster0.kxyzip4.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Listening on port ${PORT}!`);
    app.listen(PORT);
  });

// const recipe = new Recipe({
//   title: "test description",
//   description: "test description",
//   ingredients: ["orange", "lime"],
//   instructions: "test instructions",
// });

// recipe.save();
