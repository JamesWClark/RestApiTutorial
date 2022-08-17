const { validateResource } = require('./middleware/validateResource');
const { createUserHandler } = require('./controller/user.controller');
const { createUserSessionHandler } = require('./controller/session.controller');
const { createUserSchema } = require('./schema/user.schema');
const { createSessionSchema } = require('./schema/session.schema');


function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);

    app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);
}

module.exports = { routes };
