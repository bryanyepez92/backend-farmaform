
const mongoose= require('mongoose')
const uri = "mongodb+srv://pharmacy134:VP7vuSCcrbFH26b@cluster0.h0t89.mongodb.net/Promocion?retryWrites=true&w=majority";



mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
 })
    .then(db=>console.log('Db is connected'))
    .catch(err=>console.log(err));


    module.exports = mongoose;