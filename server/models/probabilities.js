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
    },
    year24 : {
        type : Number,
    },
    year25 : {
        type : Number,
    },
    year26 : {
        type : Number,
    },
})


const Probability = mongoose.model("probability" , probabilitySchema)
module.exports = Probability