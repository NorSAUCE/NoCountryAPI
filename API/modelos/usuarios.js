const mongoose =require('mongoose');

const mongoosePaginate = require('mongoose-paginate-v2');

const {Schema, model} = require('mongoose');
var schema = mongoose.Schema
const ObjectId = schema.ObjectId;
const UsuarioSchema = Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    emailValidado: {type: Boolean, default: false },
    google: {
        type : Boolean,
        default: false
    },
    rol: {
        type : String,
        required: true,
        emun: {
            values: ['ADMIN', 'USUARIO'],
            message: 'Usuario tiene que ser ADMIN o USER.'
        },
        default: 'USUARIO',
    },
    avatar: {type : String},
    nombre: {type: String},
    apellido: {type: String, required:true},
    telefono: {type: String},
    direccion: {type: String},
    coordenadas: {
        latitud: {type: Number},
        longitud: {type: Number}, 
    },
    articulos_id: [{
        type:mongoose.Schema.ObjectId,
        ref:"Articulos"
    }], 
    favoritos_id: [{
        type:mongoose.Schema.ObjectId,
        ref:"Articulos"
    }],
    feria: {
        nombre:{type: String},
        ubicacionReal: {type: String},
        coordenadas: {
            latitud: {type: Number},
            longitud: {type: Number}, 
        }
    },
});

UsuarioSchema.plugin(mongoosePaginate)
module.exports = model('Usuario', UsuarioSchema);