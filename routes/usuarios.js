const { Router } = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controllers/usuarios'); 
const router = Router();
//console.log(Object.keys(usuariosGet));
router.get('/', usuariosGet );


router.put('/:id', usuariosPut);

router.post('/', usuariosPost );

router.delete('/',usuariosDelete);
















module.exports = router;