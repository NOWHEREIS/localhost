 const mongoose = require('mongoose');
'use strict';

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre : {
        type:String,
        required:true
    },
    rut : {
        type : String,
        required:true
    },

    correo: {
        type : String,
        required: true
    },

    direccion : {
        type:String
    },


    clave : {
        type:String,
        required:true
    },
    avatar:{
        type:String,
    },

    nick:{
        type:String,
        required:true
    },
    fechaNacimiento:{
        type:Date,
        required:true
    }
});

modules.exports = mongoose.model('usuario',usuarioSchema);