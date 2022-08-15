const UserModel = require('../models/user.model');
const lodash = require('lodash');

async function createUser(input) {
    input = lodash.omit(input, ['createdAt', 'updatedAt', 'comparePassword']);
    try {
        return await UserModel.create(input);
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = createUser;