const {Schema, model, default: mongoose} = require('mongoose'); 
const mongoosePaginate = require('mongoose-paginate-v2');
const ArticulosSchema = Schema({
    usuario: {
        type:mongoose.Schema.ObjectId,
        ref:"Usuario"
    },
    nombreArticulo: {type: String, required: true},
    fechaCreacion: {type:Date, default:Date.now},
    imagen:{
        type:String
    },
    descripcion:{type: String},
    categoria:{
        type:mongoose.Schema.ObjectId,
        ref:"Categoria"
    },
    precio:{type:Number,
            min:0,
            required:true},
    ubicacion:{
        provincia: {type: String},
        localidad: {type: String}},
    estado:{
        type:String,
        emun: ['ACTIVO', 'PAUSADO', 'FINALIZADO'],
        default: 'ACTIVO'},
    valoracion:{type:Number},
    dimension:{
        alto:{type:String},
        ancho:{type:String}
    },
    material:{type:String},
    unidades:{type:String}
})

ArticulosSchema.plugin(mongoosePaginate)
ArticulosSchema.set('toJSON',{setters:true})
module.exports = model('Articulos', ArticulosSchema);