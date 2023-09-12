const mongoose = require('mongoose')

const probabilitySchema = new mongoose.Schema({
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


const Probability = mongoose.model("probability" , probabilitySchema)
module.exports = Probability