const log = require('../utils/logger');
const createUser = require('../service/user.service');

async function createUserHandler(req, res) {
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch(e) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}

module.exports = createUserHandler;