const mongoose = require("mongoose");

const dataBase = () => {
  mongoose.connect("mongodb://localhost:27017/auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});()=>{
    console.log("connected to DB")
}
};

module.exports = dataBase;
