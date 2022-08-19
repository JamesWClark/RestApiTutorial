const config = require('config');

const { validatePassword } = require('../service/user.service');
const { createSession, findSessions, updateSession } = require('../service/session.service');
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

async function getUserSessionsHandler(req, res) {
    const userId = res.locals.user._id;

    const sessions = await findSessions({ user: userId, valid: true });

    return res.send(sessions);
}

async function deleteSessionHandler(req, res) {
    const sessionId = res.locals.user.session;

    await updateSession({ _id : sessionId }, { valid: false });

    return res.send({
        accessToken: null,
        refreshToken: null
    });
}

module.exports = { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler };