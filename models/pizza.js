const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    }
},{timestamps: true});

const PizzaModel = new mongoose.model('pizzas',pizzaSchema);

module.exports = PizzaModel;