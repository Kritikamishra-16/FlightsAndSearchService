const exress=require('express');
const CityController=require('../../controllers/city-controller');

const router=exress.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id',CityController.update);

module.exports = router;
