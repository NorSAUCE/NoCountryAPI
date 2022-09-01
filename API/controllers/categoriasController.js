const categorias = require('../modelos/categorias');

module.exports = {
    createCategorias: async function(req,res,next){
        try {
        const categoria = new categorias({
            nombre:req.body.nombre
        })  
        const document = await categoria.save()
        res.status(201).json(document)  
      } catch (error) {
          console.log(error);
        }
      },
    getCategorias: async (req,res,next) =>{
        try {
          const categoria = await categorias.find()
          res.status(201).json(categoria)
        } catch (error) {
          res.status(400).json(error)
        }
      },

    getCategoria: async (req,res,next) =>{
        const {id} = req.params;
 
        try {
          const categoria = await categorias.findById(id)
          res.status(201).json(categoria)
        } catch (error) {
          res.status(400).json(error)
        }
      },

  }