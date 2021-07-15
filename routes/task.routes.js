const express = require('express');
const router =express.Router();
const Task= require('../models/task')
const dataValidator=require('../dataValidator')






router.post('/',async(req,res) => {
    const {firstName,email,Telefono,Premio,code}=req.body;
    if(dataValidator.createDataValidator(req.body)){
        return res.status(400).json({msg:'Por favor ingresar los datos correctamente'})

    }
    const task = new Task({firstName,email,Telefono,Premio,code});
    const registerCode = await Task.findOne({code});
    if(registerCode){
        return res.status(400).json({msg:'El producto ya fue registrado'})
    } else{
    
    let saveBD = await task.save();
    if(saveBD){
    res.json({msg:'Tus Datos fueron Registrados , gracias por participar'})
      }else{

    res.json({msg:'Oooops! Existe algun problema en tus datos , por favor intentalo nuevamente'})
      }
 
}

    
  });
 

module.exports=router;