const { City }= require('../models/index');
const { Op }= require('sequelize');

//this contains all the query functions to access database
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
    async updateCity(cityId,data){   //data->{name: "Prayagraj"}
        try{
            //->the below approach also works but will not return updated object if you are using Pg sql then returning: true can be used else not
            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });
            //->for getting updated data in mysql we use the below appoach
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
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

    async getAllCities(filter){  //filter object can be empty parameter also 
        try{
            if(filter.name)
            {
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities
            }
            //if empty return all cities
            const cities =await City.findAll();
            return cities;
        }catch(error){
            console.log("Something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;