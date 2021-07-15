const express = require ('express');
const helmet = require("helmet");
const morgan = require ('morgan');
const path = require ('path');
const cors = require("cors")
const rateLimit = require("express-rate-limit");

const {mongoose} = require('./database')

const app=express();
//Settings
app.set('port',process.env.PORT || 4000)
app.set('trust proxy', 1);
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
  


//Middlewares
app.use(limiter);
app.use(helmet());
app.use(cors())
app.use(morgan('dev'));
app.use(express.json()); 
app.use((error,req,res,next)=>{
   res.status(400).json({
    status:'error',
    message:error.message,
    
   }
   
   );

})

//Routes
app.use('/api/tasks',require('./routes/task.routes'));


   

//Starting Server 
app.listen(app.get('port'),() =>{
    console.log(`Server on port${app.get('port')}`);

});