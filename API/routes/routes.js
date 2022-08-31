// /api/v1/


// Usuarios
// GET /api/v1/usuarios
// GET /api/v1/usuarios:id
// POST /api/v1/usuarios 

// PUT /api/v1/usuarios:id (body entero)

// DELETE /api/v1/usuarios:id (estado=false?)
//     borra usuarios
//     borra articulos (desde articulos_id)



// Articulos
// GET /api/v1/articulos
// GET /api/v1/articulos/:id

// GET /api/v1/articulos?usuario=usuarioId
// (todos los articulos de un usuario)

// GET /api/v1/articulos/recientes
// (ultimos articulos subidos)

// GET /api/v1/articulos/interes/:idUsuario
// (articulos por categoria favorita de usuario)

// GET /api/v1/articulos/favoritos/:idUsuario

// POST /api/v1/articulos
// PUT /api/v1/articulos:id
// DELETE /api/v1/articulos:id 




// Busquedas
// GET /api/v1/buscar/articulos?palabraClave=palabraclave
// GET /api/v1/buscar/articulos?categoria=categoria

// GET /api/v1/buscar/articulos?ubicacionAprox=ubicacionAprox (?)
// GET /api/v1/buscar/articulos?lat=lat&long=long (?)
// GET /api/v1/buscar/ferias?ubicacionReal=ubicacionReal (?)



// Auth
// POST /api/v1/auth/login
// POST /api/v1/auth/register
// POST /api/v1/auth/recover