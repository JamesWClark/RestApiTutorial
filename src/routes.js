const validateResource = require('./middleware/validateResource');
const createUserHandler = require('./controller/user.controller');
const createUserSchema = require('./schema/user.schema');

function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);
}

module.exports = routes;
