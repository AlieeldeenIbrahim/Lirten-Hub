const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CertificateApplicationSchema = new Schema({
    //id of certifictate being applied for
    certificate: {
        type: String,
        required: true
    },
    //id of applicant to certificate
    applicant: {
        type: String,
        required: true
    },
    //the current status of the certificate application
    status: {
        type: String,
        required: true
    },
})

module.exports = CertificateApplication = mongoose.model('certificateApplications', CertificateApplicationSchema)