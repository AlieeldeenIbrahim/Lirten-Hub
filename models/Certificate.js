const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CertificateSchema = new Schema({
    //certificate name
    name: {
        type: String,
        required: true
    },
    //certificate description
    description: {
        type: String,
        required: true
    },
    //prerquisites to sign up for this certifictae
    prerequisites: {
        type: [String],
        required: true
    },
    //user that requested this certificate
    issuedBy: {
        type: String,
        required: true
    },
    //certifictae category
    type: {
        type: String,
        required: true
    }
})

module.exports = Certificate = mongoose.model('certificates', CertificateSchema)