const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    // _id: {
    //     type: Object,
    //     required:false
    // },
    name: {
        type: String,
        required: true
    },
    description: String,
    imagePath: String,
    time: String,
        ingredients: [{
            name: String,
            amount: Number
        }]
}, {
    timestamps: true
});


const Recipe = mongoose.model('recipe', RecipeSchema);

// Add a 'dummy' user (every time you require this file!)
/*
const recipe = new Recipe({
    name: 'testrecept',
    description: 'test',
    imagePath:'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
}).save();*/

module.exports = Recipe;