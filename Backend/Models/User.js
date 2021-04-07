const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    
    name: String,
    password: String,
    lastname: String,
    surname: String,
    weight: Number,
    height: Number,
    age: Number,
    email: String,
    phone: Number,
    address: String,
    tarjet_number: Number,
    tarjet_cvv: Number,
    tarjet_dataexp: Number  
      
})

mongoose.model("User", userSchema);