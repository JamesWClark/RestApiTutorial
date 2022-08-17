const lodash = require('lodash');

const { UserModel } = require('../models/user.model');

async function createUser(input) {
    input = lodash.omit(input, ['createdAt', 'updatedAt', 'comparePassword']);
    try {
        return await UserModel.create(input);
    } catch (e) {
        throw new Error(e);
    }
}

 async function validatePassword({ email, password }) {
    const user = await UserModel.findOne({ email });

    if(!user) {
        return false;
    }

    const isValid = await user.comparePassword(password);

    if(!isValid) {
        return false;
    }

    return lodash.omit(user.toJSON(), "password");
}

module.exports = { createUser, validatePassword };