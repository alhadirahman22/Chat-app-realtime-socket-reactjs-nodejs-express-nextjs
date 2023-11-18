const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const resError = (res, messages = '', data = [], code = 400) => {
    const rs = {
        status: false,
        messages: messages,
        data: data
    }

    return res.status(code).json(rs);
}

const resSuccess = (res, messages = '', data = [], code = 200) => {
    const rs = {
        status: true,
        messages: messages,
        data: data
    }

    return res.status(code).json(rs);
}


const encode = (data) => {
    return jwt.sign(data, process.env.APP_KEY)
};

const decode = (token) => {
    return jwt.verify(token, process.env.APP_KEY)
};

const uniqueId = () => {
    return uuidv4();
};
module.exports = {
    resError,
    resSuccess,
    encode,
    decode,
    uniqueId
};