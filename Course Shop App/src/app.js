const express = require("express");
const path = require("path");
const app =express();
const hbs=require("hbs");
const pm=require("postman");
require("./db/conn");

var Gemail="";

const User = require("./models/users");
const Course =require("./models/courses");

const port =process.env.PORT || 3000;

const static_path =path.join(__dirname,"../public");
app.use(express.static(path.join(__dirname, '../public/js')));
app.use(express.static(path.join(__dirname, '../public/css')));
const templates_path =path.join(__dirname,"../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("views",templates_path);
app.set("view engine", "hbs");

app.get("/",(req,res) => {
    res.render("index")
});

app.get("/signup",(req,res) => {
    res.render("signup");
});

app.post("/signup", async (req,res) => {
    try{
        const registerUser = new User({
            username : req.body.username,
            email : req.body.email, 
            password : req.body.password
        });

        const registeredUser = await registerUser.save();
        // res.status(307).redirect("profilepage");
        res.status(201).render("login"); 
    }catch(error){
        res.status(400).send(error);
    }
});

app.get("/login",(req,res) => {
    res.render("login")
});

app.post("/login",async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;

        const useremail = await User.findOne({email:email});

        Gemail=useremail.email;
        
        if(useremail.password=== password)
        {
            // res.status(201).render("index");
            res.status(307).redirect("/profilepage");
        }else{
            res.send("Invalid Login Details");
        }

    }catch(error){
        res.status(400).send("Invalid Login Details")
    }
})

app.get("/profilepage",async(req,res) => { 
    
    const useremail = await User.findOne({email:Gemail});
        var namee=useremail.username;
        var emaill=useremail.email;
        res.render('profilepage',{name:namee,email:emaill});

});

// app.post("/profilepage", (req,res) => {
   
// });

app.get("/gateway",(req,res)=>{
    res.render("gateway");
})

app.get("/logout",(req,res) => {
    res.render("logout");
});

app.listen(port, () =>{
    console.log('Server is running at port ${port}');
})