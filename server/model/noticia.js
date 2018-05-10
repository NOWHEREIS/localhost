/**
 * Created by: Simon Espinosa
 * E-mail: se.the.nowis@gmail.com
 */

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noticiaSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },

    fecha: {
        type: Date,
        required: true
    },

    cuerpo: {
        type: String,
        required: true
    },

    autor: {
        type: String,
        required: true
    },

    foto: {
        type: String,
        required: true
    },
    categoria: [{
        type: String,
        required: true
    }],

    tags: [{
        type: String,
        required: true
    }],

    comentarios: [{
        type: String,
    }]
});

module.exports = mongoose.model('noticia', noticiaSchema);