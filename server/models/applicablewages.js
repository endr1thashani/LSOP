const mongoose = require('mongoose')

const applicableSchema = new mongoose.Schema({
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
    }
})


const Applicable = mongoose.model('applicable' , applicableSchema)

module.exports = Applicable