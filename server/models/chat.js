const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chat = new Schema({
    username: String,
    chat_id: String,
    room: String,
    message: String,
    created_at: { type: Date, default: Date.now }
}, { collection: 'chat' });

module.exports = mongoose.model('chat', chat);
