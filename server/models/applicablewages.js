const mongoose = require('mongoose')

const applicableSchema = new mongoose.Schema({
    staffNr : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Employee',
        required : true,
    },
    gender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Employee',
        required : true,
    },
    year : {
        type : String,
        required : true,
    }
})


const Applicable = mongoose.model('applicable' , applicableSchema)

module.exports = Applicable