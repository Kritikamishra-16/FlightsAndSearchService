const {CityService}=require('../services/index');

/**
 * 
 * method -> POST
 * data -> req.body
 */

//create a global CityService class object to use it everywhere
const cityService=new CityService();

//implementing controllers
const create =async (req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message :'Not able to crete a city',
            err :error
        })
    }
}

/**
 * 
 * method -> DELETE
 * data -> req.params.id (/city/:id)
 */
const destroy = async (req,res)=>{
    try{
        const response= await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted the city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message :'Not able to delete the city',
            err :error
        })
    }
}

/**
 * 
 * method -> GET
 * data -> req.params.id (/city/:id)
 */
const get = async (req,res)=>{
    try{
        const response= await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message :'Not able to get the city',
            err :error
        })
    }
}

/**
 * 
 * method -> PATCH
 * data -> req.body
 */
const update =async (req,res)=>{
    try{
        const response= await cityService.updateCity(req.params.id,res.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message :'Not able to update the city',
            err :error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}
