const { SessionModel } = require("../models/session.model");

async function createSession(userId, userAgent) {
    const session = await SessionModel.create({ user: userId, userAgent });

    return session.toJSON();
}

module.exports = { createSession };