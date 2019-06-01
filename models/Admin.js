const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    //admin name
    name: {
        type: String,
        required: true
    },
    //admin email
    email: {
        type: String,
        unique: true,
        required: true
    },
    //admin password
    password: {
        type: String,
        required: true
    },
    //array of tasks' ids uploaded by admin
    uploaded_tasks: {
        type: [String],
        required: true
    },
    //array of notifications' ids recieved by admin
    notifications:{
        type: [String],
        required: true
    }
})

module.exports = admin = mongoose.model('admins', AdminSchema)