const jwt = require('jsonwebtoken');
const config = require('config');

const privateKey = config.get("privateKey");
const publicKey = config.get("publicKey");

function signJwt(object, options) {
    return jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: "RS256",
    });
}

function verifyJwt(token) {
    try {
        const decoded = jwt.verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded,
        }
    } catch(e) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null,
        }
    }
}

module.exports = { signJwt, verifyJwt }; 