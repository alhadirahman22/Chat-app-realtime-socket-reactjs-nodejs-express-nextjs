var express = require("express");
var router = express.Router();
const chat = require('../models/chat');
const Helper = require('../helpers');
const User = require('../models/user');
const Chat = require('../models/chat');

router.get('/fetch/:room/', async (req, res, next) => {
    let offset = 0;
    let limit = 10;

    if (req.query.limit != undefined && req.query.limit != 0) {
        limit = req.query.limit;
    }

    if (req.query.offset != undefined && req.query.offset != 0) {
        offset = req.query.offset;
    }

    const room = req.params.room
    const documents = await chat.find({ room: room }).sort({ created_at: -1 }).skip(offset).limit(limit).exec();
    Helper.resSuccess(res, 'Retrieve', documents)
});

router.post('/join', async (req, res, next) => {
    const { username, roomid } = req.body;

    // const ChatData = await Chat.findOne({ username: username, room: roomid });
    const UserData = await User.findOne({ username: username, room: roomid, status: 1 });
    const room = roomid;
    if (!UserData) {
        try {
            const user_id = Helper.uniqueId();
            const status = 1;
            const d = await User.create({
                username, user_id, room, status
            });
            return Helper.resSuccess(res, 'Retrieve', d)
        } catch (error) {
            console.log("error,", error)
            return Helper.resError(res, 'Something wrong');
        }

    }

    return Helper.resError(res, 'Username has already taken');
});


router.post('/create', async (req, res, next) => {
    const { username, room, message } = req.body;
    const chat_id = Helper.uniqueId();
    try {
        const d = await Chat.create({
            username, chat_id, room, message
        });
        return Helper.resSuccess(res, 'Retrieve', d)
    } catch (error) {
        console.log("error,", error)
        return Helper.resError(res, 'Something wrong');
    }


});

module.exports = router;