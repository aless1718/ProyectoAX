const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerSchema = new Schema({
   
    user_id: { type: Schema.ObjectId, ref: 'User' },
    date: Number,
    weight: Number,
    training_times_week: Number
     
})

mongoose.model("Register", registerSchema);