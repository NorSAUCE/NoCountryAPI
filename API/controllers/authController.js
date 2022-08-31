const bcryptjs = require("bcryptjs");
const passport = require("passport");

const { generateJWT } = require("../helpers/generateJWT");
const { sendMail } = require("../helpers/sendgrid");

const Usuario = require('../modelos/usuarios');

module.exports = {
    registro : async (req,res) => {
        const {username, email, password,telefono} = req.body;

        const user = await Usuario.find({email:email});

        console.log(user)

        if(user.length > 0){
            return res.status(400).json({
                msg:'the email is already registered'
            })
        }

        const newUser = new Usuario({username, email, password,telefono})

        //encrypting the password
        const salt = bcryptjs.genSaltSync(10);
        newUser.password = bcryptjs.hashSync(password, salt);

        try {
            await newUser.save();
            sendMail(email); //send welcome email
            return res.status(200).json({
                user: newUser
            })
        } catch (error) {
            return res.status(500).json({
                error: error
            })
        }
    },

    login: async (req,res) => {
        const {email, password} = req.body;

        try {
            const user = await Usuario.find({email:email})
    
            if(!user[0]){
                return res.status(400).json({
                    msg: 'Email does not exist'
                })
            }
            //valida la contraseña
            const validPassword = bcryptjs.compareSync(password, user[0].password);
            if(!validPassword){
                return res.status(400).json({
                    msg: 'password error'
                })
            }
    
            //generate JWT
            const token = await generateJWT(user[0]._id);
    
            res.json({
            
                token
            })
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error
            })
        }
    }
}