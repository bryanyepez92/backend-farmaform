const { truncateSync } = require("fs");

function createDataValidator(data){
    const {firstName,email,Telefono,Premio,code}=data;

    if(firstName.length<=3){
     return true;
    }
    if(typeof firstName !== 'string')
    return true;
    
    if(firstName.length<=3){
        return true;
       }

    if(Telefono.length<8){
        return true;
       }
    if(Premio.length<4){
        return true;
       }
    
     const regex=new RegExp(/^([febro]{5}||[gastri]{6})([!@#$%^&*()_+=]{2})[a-z]{3}([0-9]{3})([a-z]{2})$/);
     const dateOk=regex.test(code);
      
     if(dateOk!==true){
        return true;
       }
    
       if(code<12){
        return true;
       }

}

module.exports={
createDataValidator}