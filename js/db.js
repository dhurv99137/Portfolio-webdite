const mongoose = require("mongoose")

const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/Protfoliodata")
    console.log("Connect to mongoDB");
}
module.exports = dbConnect;  
