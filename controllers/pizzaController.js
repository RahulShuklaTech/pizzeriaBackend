const Pizzas = require ("../models/pizza")



const showAllPizzas = async () => {
    try{
        let data = await Pizzas.find({});
        if(data.length === 0) console.log("No Pizzas Yet");

        data.forEach(element => console.log(element.name));
        return data;
    }catch (e) {
        console.log("Pizza error", e.message);
        return [];
    }
}


const addNewPizza =  async ({name,price,ingredients}) => {
    try{
        const pizza = new Pizzas({name,price,ingredients});
        await pizza.save();
        return pizza
    }catch(e){
        console.log("couldnt add pizza",e.message);
        return false
    }
    

}


const findPizza = async (name) => {
    try{
        const pizza = Pizzas.findOne({name});
        const id = pizza._id;
        console.log(id)
        return id;
    }catch(e){
        console.log(e.message)
        return false
    }
}


module.exports = {showAllPizzas,addNewPizza,findPizza};