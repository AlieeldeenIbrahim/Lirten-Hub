const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
     },
    uploaded_tasks: {
        type: [String],
        required: true
    },
    notifications:{
        type: [String],
        required: true
    }
})

module.exports = admin = mongoose.model('admins', AdminSchema)