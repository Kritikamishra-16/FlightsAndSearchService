const exress=require('express');
const CityController=require('../../controllers/city-controller');

const router=exress.Router();

router.post('/city', CityController.create);

module.exports = router;
