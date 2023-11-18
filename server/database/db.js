
const config = {
    mongo: "mongodb://127.0.0.1:27017/chat?useUnifiedTopology=true"
}
const mongoose = require('mongoose');
mongoose.connect(config.mongo, { useNewUrlParser: true })
    .catch(e => console.log('fail to connect to mongodb:', e.message));
mongoose.connection.on('error', e => console.log('error mongodb connection:', e.message));
mongoose.connection.on('disconnected', () => console.log('connection to mongodb server lost'));
mongoose.connection.on('reconnected', () => console.log('reconnected to mongodb server'));

exports.init = app => {
    mongoose.connection.once('connected', () => {
        console.log('connected to mongodb server');
        app.emit('db_connected');
    });
};