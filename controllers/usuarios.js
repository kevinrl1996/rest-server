const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'GET API-CONTROLLER'
    })
}

const usuariosPut = (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'PUT API-CONTROLLER'
    })
}

const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'POST API-CONTROLLER',
        body
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API-CONTROLLER'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API-CONTROLLER'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}