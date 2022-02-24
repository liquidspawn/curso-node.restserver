const { response  } = require('express');


const usuariosGet = (req, res = response) => {
       
    res.json({
        msg: 'get api'
    });
  
}


const usuariosPut = (req, res = response) => {
         const id = req.params.id;


    res.json({
        msg: 'get api-put',
        id
    });
  
}

const usuariosPost = (req, res = response) => {
       
const { nombre, edad } = req.body;


    res.json({
        msg: 'get api-post',
        nombre,
        edad
    });
}
const usuariosDelete = (req, res = response) => {
       
    res.json({
        msg: 'get api-delete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}