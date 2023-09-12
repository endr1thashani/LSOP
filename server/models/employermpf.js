const mongoose = require('mongoose')

const employermpfSchema = new mongoose.Schema({
    staffNr : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    year : {
        type : String,
        required : true,
    },
    year23 : {
        type : Number,
        default : 0
    },
    year24 : {
        type : Number,
        default : 0
    },
    year25 : {
        type : Number,
        default : 0
    },
    year26 : {
        type : Number,
        default : 0
    },
})


const Employermpf = mongoose.model("employermpf" , employermpfSchema)
module.exports = Employermpf