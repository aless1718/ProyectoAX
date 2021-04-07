const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
   
         user_id: { type: Schema.ObjectId, ref: 'User' },
         product_number: [{ type: Schema.ObjectId, ref: 'Product' }],
         date_order: Number
     
})

mongoose.model("Order", orderSchema);