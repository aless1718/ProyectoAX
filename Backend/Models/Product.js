const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
   
    product_number: Number,
    date_exp: Number,
    product_name: String,
    price: Number,
    sizes: [String],
    photo: String
     
})

mongoose.model("Product", productSchema);