
const mongoose = require('mongoose');
const dbConnection = async() => {
   mongoose.connect('mongodb+srv://user_node_cafe:G5AlKgGATnV3uzya@miclustercafe.0n3yp.mongodb.net/garageStore',function(error){
    if(error){
        throw error;
    }else{
        console.log("Conectado con mongodb");
    }
});
}

module.exports ={
    dbConnection
}
