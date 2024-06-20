const mongoose = require("mongoose")

let Protfolio = new mongoose.Schema({
    Name: String,
    Email: String,
    Phone_Number: Number,
    How_Can_I_Help_You: String
})

const Protfoliodata = mongoose.model("protfolio", Protfolio)

module.exports = Protfoliodata


