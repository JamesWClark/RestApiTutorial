const config = require('config');

const { validatePassword } = require('../service/user.service');
const { createSession } = require('../service/session.service');
const { signJwt } = require('../utils/jwt.utils');

async function createUserSessionHandler(req, res) {

    // validate user password
    const user = await validatePassword(req.body);

    if(!user) {
        return res.status(401).send("Invalid email or password");
    }

    // create a session
    const session = await createSession(user._id, req.get("user-agent") || "");

    // create access token
    const accessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTtl") } // 15 minutes
    );

    // create refresh token
    const refreshToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: config.get("refreshTokenTtl") } // 15 minutes
    );

    // return access and refresh tokens
    return res.send({ accessToken, refreshToken });
}

module.exports = { createUserSessionHandler };