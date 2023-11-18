const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    user_id: String,
    room: String,
    status: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
}, { collection: 'user' });

module.exports = mongoose.model('user', user);
