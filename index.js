const express = require("express");
const mongoose = require("mongoose");
const Pizzas = require("./controllers/pizzaController");
const orderPizza = require("./controllers/orderItemController");
const orders = require("./controllers/orderController");

mongoose.connect("mongodb://127.0.0.1:27017/PizzaShop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Mongo is ON");
}).catch((e) => console.log("error while connecting to mongo:", e.message));
   



const app = express();
app.use(express.json());



app.get('/', async (req,res) => {
    
    console.log("Pizza Shop")

    res.status(200).send("Sup")
   
    // res.send('Welcome to Mclaren Library');
})


app.get('/api/orders/:id', async (req,res) => {
    try{
        // let response = await Pizzas.showAllPizzas();
        // let answer = await JSON.stringify(response);
        console.log(req.params["id"])
        let response = await orderPizza.singleOrder(req.params["id"])
        console.log("response ",response)
        res.status(200).send(response)

        // console.log(response)
    }catch(e){
        res.status(400).send(e.message)
    }   
   
   
})

app.get('/api/orders', async (req,res) => {
    let ingredient = req.query.ingredients;

    
    try{

        let response = await orders.showOrders();
        // if(ingredient){
        //     response = response.filter(pizza => pizza.ingredients.includes(ingredient))
        // }
        
        
        res.status(200).send(response)
        // console.log(response)
    }catch(e){
        res.status(400).send(e.message)
    }   
   
   
})








app.get('/api/orders', async (req,res) => {
    let ingredient = req.query.ingredients;

    
    try{

        let response = await Pizzas.showAllPizzas();
        if(ingredient){
            response = response.filter(pizza => pizza.ingredients.includes(ingredient))
        }
        
        
        res.status(200).send(response)
        // console.log(response)
    }catch(e){
        res.status(400).send(e.message)
    }   
   
   
})




app.post('/addpizza',async (req,res) => {
    console.log("req",req.body)
    let response = await Pizzas.addNewPizza(req.body)
    console.log(response);
    if(response){
        res.send("Pizza added:"+response.name)
    }else{
        res.sendStatus(400).send("No Pizza added.")
    }

})

app.post('/orderpizza',async (req,res) => {
    console.log("req",req.body)
    let response =    await orderPizza.addOrderItem(req.body)
    
    // console.log(response);
    if(response){
        res.send("Pizza added:"+response)
    }else{
        res.sendStatus(400).send("No Pizza added.")
    }

})









//Server listening

const PORT = 3500

app.listen(PORT, () => {
    console.log("server is listening at http://localhost: "+PORT)
})

