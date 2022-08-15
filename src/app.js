const express = require('express');
const config = require('config');
const connect = require('./utils/connect');
const log = require('./utils/logger');

const port = config.get('port');
const app = express();

app.listen(port, async () => {
    log.info(`App running on http://localhost:{port}`);

    await connect();
})