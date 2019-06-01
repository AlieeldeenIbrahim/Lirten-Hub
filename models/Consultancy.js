const mongoose = require('mongoose')
const Schema = mongoose.Schema

const consultancySchema = new Schema({
    //name of consultancy
    name:{
        type: String,
        required:true,
        unique:true
    },
    //company register number
    com_reg_num: {
        type: Number,
        required: true,
        unique:true

    },
    //date consultancy was established
    established_since: {
        type: Date, 
        required: true
    },
    //the consultancy's field of expertiece
    field: {
        type: String,
        required: true
    },
    //brief description of consultancy
    description: {
        type: String,
        required: true,
        unique:true
    },
    //main email used to contact the consultancy
    email: {
        type: String,
        unique:true,
        required:true
    },
    //password used by said consultancy
    password:{
        type: String,
        required:true,
    },
    //primary means of contacting the consultancy
    phone_number:{
        type: String,
        unique:true,
        required:true
    }
})

module.exports = ConsultancySchema = mongoose.model('consultancy', consultancySchema)