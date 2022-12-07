const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    coursename: {
        type:String,
        required:true
    },
    courseduration: {
        type:String,
        required:true
    },
    courselevel: {
        type:String,
        required:true
    },
    projectincourse: {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    instructorname: {
        type:String,
        required:true
    },
    coursedescription: {
        type:String,
        required:true
    },
    courserating: {
        type:Number,
        required:true
    },
})

const Courses = new mongoose.model("course",courseSchema);
module.exports=Courses;