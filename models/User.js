const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    //user name
    name: {
        type: String,
        required: true
    },
    //user age
    age: {
        type: Number,
        required: true
    },
    //user email
    email: {
        type: String,
        required: true
    },
    //user password
    password: {
        type: String,
        required: true
    },
    //list of task IDs finished
    completed_tasks: {
        type: [String]
    },
    //means of contact
    contact_info: {
        type: Number,
        required: true
    },
    //user's CV
    updated_CV: {
        type: [String]
    },
    //date user was registered
    registered_on: {
        type: Number
    },
    //is user signed
    signed: {
        type: Boolean
    },
    //user rating based on other partners
    rating: {
        type: Number
    },
    //notifications recieved by user
    notifications: {
        type: [String]
    },
    //user's list of skills 
    certifications: {
        type: [String]
    },
})

module.exports = User = mongoose.model('users', UserSchema)