const mongoose = require('mongoose')

const stayingSchema = new mongoose.Schema({
    staffNr : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Employee',
        required : true,
    },
    gender : {
        type : String ,
        required : true,
    },
})


const Staying = mongoose.model("staying" , stayingSchema)
module.exports = Staying