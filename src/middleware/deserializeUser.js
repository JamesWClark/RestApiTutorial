const lodash = require('lodash');
const { verifyJwt } = require('../utils/jwt.utils');

function deserializeUser(req, res, next) {
    const accessToken = lodash.get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

    if(!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken);

    if(decoded) {
        res.locals.user = decoded;
        return next();
    }

    return next();
}

module.exports = { deserializeUser };