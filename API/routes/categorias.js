const router = require("express").Router();
const categoriasController = require('../controllers/categoriasController')

router.get('/',categoriasController.getCategorias);
router.get('/:id',categoriasController.getCategoria);

router.post('/',categoriasController.createCategorias);

module.exports = router;