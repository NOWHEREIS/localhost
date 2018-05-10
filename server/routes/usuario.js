/**
 * Created by me
 */

'use strict';

const express = require('express');
const UsuarioController = require('../controller/usuario');

const api= express.Router();

api.post('/login',UsuarioController.iniciarSesion);

module.exports= api;