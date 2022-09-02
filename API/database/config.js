
const mongoose = require('mongoose');
const dbConnection = async() => {
   mongoose.connect('mongodb+srv://NoraSAUCE:mypass123456789@cluster0.usglzz3.mongodb.net/?retryWrites=true&w=majority',function(error){
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
