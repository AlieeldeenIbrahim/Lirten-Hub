const mongoose = require('mongoose')
const Schema = mongoose.Schema

// The User Model
const PartnerSchema = new Schema({
        //partner name
        name:{
                type: String,
                required: true
        },
        //partner password
        password:{
                type: String,
                required: true
        },
        //partner email
        email: {
                type: String,
                required: true
        },
        //partner contact info
        contact_info: {
                type: String,
                required: true    
        },
        //date the partner registered to website
        registered_on: {
                type: Date,
                
        },
        //company register number
        com_reg_num: {
                type: Number,
                
        },
        //descrption of partner
        info: {
                type: String,
                
        },
        //is partner currently signed
        signed: {
                type: Boolean,
        }, 
        //rating based on other users
        rating: {
                type: Number,
        },
        //tasks submitted by the partner
        submitted_tasks: {
                type: [String],
        },
        //notifcations recieved by the partner
        notifications:{
                type: [String],
        },
        //a list of associates to the partner
        associates: {
                type: [String],
        },
        //a list of the partner's board memebers
        board_members: {
                type: [String],
        },
        //list of events submitted by said partner
        events: {
                type: [String],
        },
        //a feedback message from partner 
        feedback: {
                type: String,
        }
})
module.exports = Partner = mongoose.model('partners', PartnerSchema)