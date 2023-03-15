const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://0.0.0.0:27017/e-commerce",{useNewURLParser: true})
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(`this is err${err}`);
})
   









