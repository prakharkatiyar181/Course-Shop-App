const mongoose = require("mongoose");

var db=mongoose.connect("mongodb://localhost:27017/courseShopApp", {
    useNewUrlParser :true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then (()=> {
    console.log('connection successfull');
}).catch((e)=> {
    console.log('no connection');
});
module.exports=db;