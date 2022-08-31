
const mongoose = require('mongoose');
const dbConnection = async() => {
   mongoose.connect(process.env.MONGODB_CNN,function(error){
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
