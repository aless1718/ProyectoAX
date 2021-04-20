const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerSchema = new Schema({
   
    user_id: { type: Schema.ObjectId, ref: 'User' },
    fecha: Date,
    peso: Number,
    pierna: Number,
    brazo: Number,
    cintura: Number,
    torso: Number,
    hombros: Number

     
})

mongoose.model("Register", registerSchema);