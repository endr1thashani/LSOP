const mongoose = require('mongoose')

const longpaymentSchema = new mongoose.Schema({
    staffNr : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
    },
    sumofLsp : {
        type : Number,
        required : true
    },
    lspOff : {
        type : Number,
        required : true
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


const LongPayment = mongoose.model("longservicepayment" , longpaymentSchema)
module.exports = LongPayment