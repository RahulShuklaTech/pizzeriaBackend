const orderItem  = require("../models/orderItem");
const pizzaRef = require("../models/pizza");
const orderRef = require("../models/order")

const addOrderItem = async ({pizza,quantity}) => {
    let myPizza = await pizzaRef.findOne({name: pizza});
    try{
        let orderItems = new orderItem({pizza: myPizza.id, quantity})
        await orderItems.save()
        let order = new orderRef({orders: orderItems.id})
        await order.save()
        return orderItems
    }catch(e){
        console.log("cant add order",e.message);
        return false
    }

}


const showOrderItem = async () => {
    try{
        let data = await orderItem.find({});
        if(data.length === 0) console.log("No orders Yet");

        data.forEach(element => console.log(element.quantity));
        return data;
    }catch (e) {
        console.log("Pizza error", e.message);
        return [];
    }

}


const singleOrder = async (id) => {
    try {
        let data = await orderItem.findOne({_id :id})
        console.log(data)
        return data
    }catch(e){
        console.log("cant find order"+e.message);
        return false
    }
}

module.exports = {addOrderItem,showOrderItem,singleOrder};