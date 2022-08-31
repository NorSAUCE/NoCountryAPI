const router = require("express").Router();
const articulosController = require('../controllers/articulosController');

/* GET users listing. */
router.post('/', articulosController.create);
router.get('/buscarnombre',articulosController.getnombre);
router.get('/donaciones',articulosController.getDonaciones);//trae los que tienen precio 0 
router.get('/', articulosController.getAll);
router.get('/recientes', articulosController.getRecientes);//trae por fecha
router.get('/:id',  articulosController.getById);
router.put('/:id', articulosController.update);
router.delete('/:id',  articulosController.delete);

module.exports = router;