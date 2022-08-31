const Usuarios = require('../modelos/usuarios');

module.exports ={

  get: async (req,res,next) =>{
    try{
      const usuarios = await Usuarios.paginate(query, options);

      res.status(201).json({
        usuarios
      })
      
    } catch (error) {
      res.status(400).json({
        error
      })
    }
  },

  getOne:async (req,res,next) =>{

    const {id} = req.params;

    try {
      const usuario = await Usuarios.findById(id);

      if(usuario){
        res.status(201).json({
          usuario
        })
      }else{
        res.status(400).json({
          msg: `El usuario con el id ${id} no existe`
        })
      }

    } catch (error) {
      res.status(400).json({
        error
      })
    }

    

  },

  create: async (req,res,next) =>{
    const user = new Usuarios({
      username:req.body.username,
      password:req.body.password,
      email:req.body.email,
      emailValidado:req.body.emailValidado,
      google:req.body.google,
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      telefono:req.body.telefono,
      direccion:req.body.direccion,
      coordenadas:req.body.coordenadas,
      rol:req.body.rol,
      avatar:req.body.avatar,
      articulos_id:req.body.articulos_id,
      favoritos_id:req.body.favoritos_id,
      feria: req.body.feria,
    });

    try {

      const newUser = await user.save();
      res.status(201).json(newUser)

      } catch (error) {
        res.status(500).json(error)
      }
  },

  update: async (req,res,next) =>{

    const {id} = req.params;

    const {
            _id, 
            password, 
            google,
            emailValidado,
            rol,
            __v,
              ...resto} = req.body;

    try {
      const usuarioModificado = await Usuarios.findByIdAndUpdate(id, resto);
      res.status(201).json({
        usuarioModificado
      })
    } catch (error) {
      res.status(400).json({
        error
      })
    }
  },

  delete: async (req,res,next) =>{

    const {id} = req.params;

    try {
      await Usuarios.findByIdAndDelete(id);

      // ¡¡¡FALTA ELIMINAR TODOS LOS ARTICULOS DEL USUARIO!!! 

      res.status(201).json({
        msg: 'ok'
      })
    } catch (error) {
      res.status(400).json({
        error
      })
    }
  },


  articulosuser: async (req,res,next) => {

    const {usuario} = req.query;

    try {
      const usuarioArticulos = await Usuarios.findById(usuario);
      const articulos = usuarioArticulos.articulos_id;

      res.status(200).json({
        articulos
      })

    } catch (error) {
      res.status(400).json({
        error
      })
    }

  },

  buscaNombre: async (req,res,next) => {

    let queryFind={};
    const buscar = req.query.buscar;

    try {
      if(buscar){
        queryFind = {
                      'contacto.nombre':{$regex:".*"+buscar+".*",$options:"i"}
                    }
      }

      const usuarios = await Usuarios.paginate(queryFind)

      res.status(200).json({
        usuarios
      })

    } catch (error) {
      res.status(200).json({
        error
      })
    }
5
  },

  favoritos: async (req,res,next) => {

    const {usuario} = req.query;

    try {
      const usuarioFav = await Usuarios.findById(usuario);
      const favoritos = usuarioFav.favoritos_id;
      console.log(usuarioFav)
      res.status(200).json({
        favoritos
      })

    } catch (error) {
      res.status(400).json({
        error
      })
    }


  },

}




