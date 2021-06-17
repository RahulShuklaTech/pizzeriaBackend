const order= require("../models/order");
const orderItems = require("../models/orderItem");


const showOrders = async  () => {

    let orders = await order.find({}).populate({ path: "orders",populate: {path: "pizza"}})

    

    if (orders.length === 0) {
        console.log("Nothing to Dispaly")

    }
    orders.forEach(order => console.log(order));
    return orders;

}


// const getSingleOrder = (id) => {

//     try{
//         let response =  await order.find({})
//     }


// }

module.exports = {showOrders};