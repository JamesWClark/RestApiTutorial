const express = require('express');
const config = require('config');
const { connect } = require('./utils/connect');
const { log } = require('./utils/logger');
const { routes } = require('./routes');
const { deserializeUser } = require('./middleware/deserializeUser');

const port = config.get('port');
const app = express();

app.use(express.json());
app.use(deserializeUser);

app.listen(port, async () => {
    log.info(`App running on http://localhost:{port}`);

    await connect();

    routes(app);
})