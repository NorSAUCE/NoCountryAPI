const {Schema, model} = require('mongoose'); 
const CategoriaSchema = Schema({
        nombre:{type: String}, 
    })

    module.exports = model('Categoria', CategoriaSchema);