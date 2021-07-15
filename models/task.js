const mongoose = require('mongoose')
const {Schema}= mongoose;

const UserDataSchema= new Schema({
   
    firstName:{type:String , required:[true,'El nombre es obligatorio']},
    email:{type:String , required:[true,'El correo es obligatorio']},
    Telefono:{type:Number , required:true},
    Premio:{type:String , required:true},
    code:{type:String , required:[true,'No escanero el producto'],unique:true },

 

});

module.exports=mongoose.model('UsuariosParticipantes',UserDataSchema);