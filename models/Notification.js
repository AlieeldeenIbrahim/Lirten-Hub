const mongoose = require('mongoose')
const Schema = mongoose.Schema


const NotificationSchema = new Schema({
    //id of entity the notification is being sent
    sent_to: {
        type: String,
        required: true
    },
    //content of notification
    notifies: {
        type: String,
        required: true
    },
    //id of sender of notification
    sent_from: {
        type: String,
        required: true
    },
    //time the notification being sent
    time: {
        type: Number, 
        required: true
    },
})

module.exports = Notification = mongoose.model('notifications', NotificationSchema)