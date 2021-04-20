const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    name: String,
    password: String,
    lastname: String,
    surname: String,
    weight: String,
    height: String,
    age: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    street: String,
    portal: String,
    stair: String,
    door: String,
    PostalCode: String,
    tarjet_name: String,
    tarjet_number: String,
    tarjet_cvv: String,
    tarjet_dataexp: String  
      
})

mongoose.model("User", userSchema);