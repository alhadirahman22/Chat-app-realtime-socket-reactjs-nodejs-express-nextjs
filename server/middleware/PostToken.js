const Helper = require("../helpers/index");

const postToken = (request, response, next) => {
    try {
        if (request.method === 'POST') {
            if (request.body.token !== undefined) {
                const tokenDecrypt = Helper.decode(request.body.token);
                console.log("tokenDecrypt ", tokenDecrypt);
                delete request.body.token;
                request.body = tokenDecrypt;

                return next();
            }
            else {
                return Helper.resError(response, 'Invalid Token');
            }
        }
        return next();
    } catch (error) {
        return Helper.resError(response, 'Invalid Token');
    }
};

module.exports = {
    postToken,
};