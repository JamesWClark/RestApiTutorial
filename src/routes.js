const { requireUser } = require('./middleware/requireUser');
const { validateResource } = require('./middleware/validateResource');
const { createUserHandler } = require('./controller/user.controller');
const { createUserSessionHandler, deleteSessionHandler, getUserSessionsHandler } = require('./controller/session.controller');
const { createProductHandler, getProductHandler, updateProductHandler, deleteProductHandler } = require('./controller/product.controller');
const { createUserSchema } = require('./schema/user.schema');
const { createSessionSchema } = require('./schema/session.schema');
const { createProductSchema, updateProductSchema, getProductSchema, deleteProductSchema } = require('./schema/product.schema');

function routes(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));

    app.post('/api/users', validateResource(createUserSchema), createUserHandler);

    app.post('/api/sessions', validateResource(createSessionSchema), createUserSessionHandler);

    app.get('/api/sessions', requireUser, getUserSessionsHandler);

    app.delete('/api/sessions', requireUser, deleteSessionHandler);

    app.post('/api/products', [ requireUser, validateResource(createProductSchema)], createProductHandler);

    app.put('/api/products/:productId', [ requireUser, validateResource(updateProductSchema)], updateProductHandler);

    app.get('/api/products/:productId', validateResource(getProductSchema), getProductHandler);

    app.delete('/api/products/:productId', [ requireUser, validateResource(deleteProductSchema)], deleteProductHandler);

}

module.exports = { routes };
