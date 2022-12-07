const mongoose = require("mongoose");

var db=mongoose.connect("mongodb://localhost:27017/courseShopApp", {
    useNewUrlParser :true,
    useUnifiedTopology:true,
    useCreateIndex:true
}, (err) => {
    if(err) {
        console.log("MongoDB not connected");
    }
    else{
        console.log("MongoDB is connected");
    }
});
module.export=db;