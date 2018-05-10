/**
 * Create by me
 **/

'use strict';
const bcrypt = require('bcrypt-nodejs');
const Usuario = require('../model/usuario');
const jwt =  require('../services/jwt');

function iniciarSesion(req, res) {
    const params = req.body;
    const rutMail = params.rut;
    const password = params.password;

    Usuario.findOne({}).select('+password').or([{rut: rutMail}, {email: rutMail}]).exec(function (err, usuario_encontrado) {
        if (err) {
            res.status(500).send({
                desc: 'Error en el Servidor',
                err: err.message
            })
        } else {
            if(!usuario_encontrado){
                res.status(404).send({
                    desc: 'Usuario no encontrado'
                });
            }else {

                bcrypt.compare(password,usuario_encontrado.password,function (err,check) {
                    if(check){
                        if(params.gettoken){
                            res.status(200).send({token: jwt.createToken(usuario_encontrado)});
                        }else{
                            res.status(200).send(usuario_encontrado);
                        }
                    }else{
                        res.status(400).send({
                            desc :'Contraseña incorrecta'
                        });
                    }
                })
            }
        }

    });

}

module.exports = {
    iniciarSesion,
};