const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
    orders: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "OrderItems"
    }
    
},{timestamps: true});

const OrdersModel = new mongoose.model('Order',OrdersSchema);

module.exports = OrdersModel;