const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true,
        default: 'Anonymous',
        unique: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {collection: 'messages'})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
