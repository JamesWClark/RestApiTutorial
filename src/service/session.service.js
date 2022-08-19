const { SessionModel } = require("../models/session.model");

async function createSession(userId, userAgent) {
    const session = await SessionModel.create({ user: userId, userAgent });

    return session.toJSON();
}

async function findSessions(query) {
    return SessionModel.find(query).lean();
}

async function updateSession(query, update) {
    return SessionModel.updateOne(query, update);
}

module.exports = { createSession, findSessions, updateSession };