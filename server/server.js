// const { application } = require("express");
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// import Recipe from "./models/recipe"
import dotenv from 'dotenv'
dotenv.config()

// require("dotenv").config();

console.log(process.env)

mongoose
  .connect(
    `mongodb+srv://Ben:${process.env.MONGODB_PASS}@cluster0.kxyzip4.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Listening on port ${PORT}!`);
    app.listen(PORT);
  });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

// const recipe = new Recipe({
//   title: "test description",
//   description: "test description",
//   ingredients: ["orange", "lime"],
//   instructions: "test instructions",
// });

// recipe.save();
