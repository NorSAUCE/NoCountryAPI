const express = require('express')
require('dotenv').config()
const morgan =require('morgan');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 3001
const { dbConnection } = require('./database/config');



var usersRouter = require('./routes/usuarios');
var articulosRouter =require('./routes/articulos');
var categoriasRouter =require('./routes/categorias');
var authRouter =require('./routes/auth');

const database = async () => {
    await dbConnection();
}

database()


app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/usuarios', usersRouter);
app.use('/articulos',articulosRouter);
app.use('/categorias',categoriasRouter);
app.use('/auth',authRouter);



app.listen(PORT, () => {
  console.log(`Aplicacion escuchando en puerto ${PORT}`)
})