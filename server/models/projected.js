const mongoose = require('mongoose')

const projectedSchema = new mongoose.Schema({
    gender : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    probofDying : {
        type : Number,
        required : true
    },
    numofSuv : {
        type : Number,
        required : true
    },
    numofDeaths : {
        type : Number,
        required : true
    },
    numofP : {
        type : Number,
        required : true
    },
    totalofP : {
        type : Number,
        required : true 
    },
    expecofLife : {
        type : Number,
        required : true 
    }
})

const Projected = mongoose.model("projectedlives" , projectedSchema )

module.exports = Projected
