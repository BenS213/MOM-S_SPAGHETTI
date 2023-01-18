import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;


    // ingredients: [String],
    // author: String,
    // description: String,
    // instructions: [String],