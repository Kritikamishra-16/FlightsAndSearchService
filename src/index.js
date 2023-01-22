const express = require('express');
const bodyParser=require('body-parser');

const {PORT} = require('./config/serverConfig');
const ApiRoutes=require('./routes/index');

//const {Airport,City}= require('./models/index');
const db= require('./models/index');


const setupAndStartServer= async ()=>{
    //create the express object
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);

    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`); //string interpulation
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true}); 
        }
        
    //     const city=await City.findOne({
    //         where: {
    //             id:10
    //         }
    //     });
    //    const airports=await city.getAirports();

    //     const newAirport=await Airport.findOne({
    //         where:{
    //             name: 'Jindal Vijaynagar Airport',
    //             cityId:7
    //         }
    //     });
    //     await city.addAirport(newAirport);
    //     console.log(city,airports);

    });
}

setupAndStartServer(); 