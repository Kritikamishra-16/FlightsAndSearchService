const exress=require('express');
const CityController=require('../../controllers/city-controller');

const router=exress.Router();
           //url,controller(req,res)
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.patch('/city/:id',CityController.update);
//writing an API->which try to fetch all the possible cities present in our database
router.get('/city',CityController.getAll);


module.exports = router;
