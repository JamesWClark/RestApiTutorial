const lodash = require('lodash');
const { verifyJwt } = require('../utils/jwt.utils');
const { reIssueAccessToken } = require('../service/session.service');

async function deserializeUser(req, res, next) {
    const accessToken = lodash.get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

    const refreshToken = lodash.get(req, 'headers.x-refresh');

    if(!accessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(accessToken);

    if(decoded) {
        res.locals.user = decoded;
        return next();
    }

    if(expired && refreshToken) {
        const newAccessToken = await reIssueAccessToken({ refreshToken });

        if(newAccessToken) {
            res.setHeader('x-access-token', newAccessToken);
        }

        const result = verifyJwt(newAccessToken);

        res.locals.user = result.decoded;

        return next();
    }

    return next();
}

module.exports = { deserializeUser };