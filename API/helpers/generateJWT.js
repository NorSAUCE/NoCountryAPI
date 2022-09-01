const jwt = require('jsonwebtoken');
const usuarios = require('../modelos/usuarios');


const generateJWT = (userId = '') =>{
    return new Promise((res, rej) => {
        const payload = {userId};

        jwt.sign(payload,'mipassword123', {
            expiresIn: '6h'
        }, (err, token) =>{
            if(err){
                console.log(err);
                rej('Failed to generate token!');
            }else{
                res(token);
            }
        });
    });
}


module.exports = {
    generateJWT
}