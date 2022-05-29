
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());


// mongoose.connect("mongodb://localhost:27017/auth",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });()=>{
//     console.log("connected to DB")
// }


// //user schema 
// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)

// //routes routes
// app.post("/Login",(req,res)=>{
//     const {email,password} =req.body;
//     res.send(email)
//     // User.findone({email:email},(err,user)=>{
//     //     if(user){
//     //        if(password === user.password){
//     //            res.send({message:"login sucess",user:user})
//     //        }else{
//     //            res.send({message:"wrong credentials"})
//     //        }
//     //     }else{   
//     //         res.send("not register")
//     //     }
//     // })
// });
// app.post("/Register",(req,res)=>{
//     console.log(req.body) 
//     const {name,email,password} =req.body;
//     User.findOne({email:email},(err,user)=>{
//         if(user){
//             res.send({message:"user already exist"})
//         }else {
//             const user = new User({name,email,password})
//             user.save(err=>{
//                 if(err){
//                     res.send(err)
//                 }else{
//                     res.send({message:"sucessfull"})
//                 }
//             })
//         }
//     })


// }) 



const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

const dataBase = require("./conf/dataBase");
dataBase.call();

const register = require("./routers/register");
app.use("/", register);

const login = require("./routers/login");
app.use("/", login);

const logout = require("./routers/logout");
app.use("/", logout);

const entry = require("./routers/entry");
app.use("/", entry);

const exit = require("./routers/exit");
app.use("/", exit);
const otp = require("./routers/otp");
app.use("/", otp);
const getlogs = require("./routers/getlogs");
app.use("/", getlogs);

app.listen(5000,()=>{
    console.log("started")
})