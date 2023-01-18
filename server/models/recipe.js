import mongoose, { Schema, model } from "mongoose";

const recipeSchema = new Schema({
    title: String,
    ingredients: [String],
    author: String,
    description: String,
    instructions: String,
});

const Recipe = model('Recipe', recipeSchema);
module.export(Recipe);