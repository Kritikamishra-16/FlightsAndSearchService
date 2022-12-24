const express=require('express');
const router=express.Router();

const v1ApiRoutes= require('./v1/index');

//whenever there is a '/v1 route map it to v1ApiRoutes
router.use('/v1',v1ApiRoutes);

module.exports= router;