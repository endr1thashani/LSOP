const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    staffNr : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
    },
    dateOfBirth :{
        type : String,
        required : true
    },
    dateOfJoin :{
        type : String,
        required : true
    },
    averageIncome : {
        type : Number,
        required : true,
    },
    averageMI : {
        type : Number,
        required : true,
    },
    employeeBonus : {
        type : Number,
        required : true,
    },
})


const Employee = mongoose.model("employee" , employeeSchema)

module.exports = Employee