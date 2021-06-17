const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    pizza: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "pizzas",
        required: true
        
    },
    quantity: {
        type: Number,
        required: true
    },
    
},{timestamps: true, });

const OrderItemModel = new mongoose.model('OrderItems',OrderItemSchema);

module.exports = OrderItemModel;