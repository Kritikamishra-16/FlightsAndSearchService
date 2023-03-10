//its role is to contain all the business logic
const {CityRepository} =require('../repository/index');

class CityService{
    constructor(){
        //object of CityRepository class
        this.cityRepository=new CityRepository();
    }

    async createCity(data){
        try{
            //we will get data here from {controllers(which have access to all (req,res) objects) } In this data all the properties require to create a city is present here so we just call the repository function
            const city= await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try{
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city=await this.cityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAllCities(filter){
        try{
            const cities=await this.cityRepository.getAllCities({name: filter.name}); //filter cities on name parameter only so that no other filter except 'name' passed to repository layer
            return cities;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports= CityService;