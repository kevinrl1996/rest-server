const { response } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const validarJWT = async (req, res = response, next) => {
    const token = req.header('x-token');

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);
        // Leer el usuario que corresponde al uid
        const usuario = req.usuario = await Usuario.findById(uid)
        // Verificar si el uid tiene estado en true
        if (!usuario.estado) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }
        req.usuario = usuario
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }
}

module.exports = {
    validarJWT
}