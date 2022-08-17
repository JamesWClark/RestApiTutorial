const log = require('../utils/logger');
const createUser = require('../service/user.service');
const lodash = require('lodash');

async function createUserHandler(req, res) {
    try {
        const user = await createUser(req.body);
        return res.send(lodash.omit(user.toJSON(), "password"));
    } catch(e) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}

module.exports = createUserHandler;