const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//Create the schema
const ApplicationSchema = new Schema(
{
    //user applicant
    user: {
        type: String, 
        required: true  
    },
    //applied task
    task:{
        type: String,
        required: true
    },
    //description of the task
    description:{
        type: String,
        required: true
    },
    //date of creation
    date:{
        type: Date
    }
})

module.exports = Application = mongoose.model('applications', ApplicationSchema)