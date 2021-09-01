const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const rutinasSchema = new Schema({
   
    user_id: { type: Schema.ObjectId, ref: 'User' },
    fecha: Date,
    nivel: Number,
    duracion: Number,
    nroejers: Number,
    series: Number,
    repes: Number,
    material: Boolean,
    musculos: [],
    tipoRutina: [],
    descripcion: String

})

mongoose.model("Rutinas", rutinasSchema);