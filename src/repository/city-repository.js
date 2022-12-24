const { City }= require('../models/index');

class CityRepository {

    async createCity({name}){   //destructuring the object to use it directly
        try{
            //async call as we are communicating outside the JS server with db server so this functionaluty is not native to js thats why it is handled by runtime promise
            const city= await City.create({ //pass the object
                name  //name(model_property): name(object key)
            }) 
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){
        try{
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;