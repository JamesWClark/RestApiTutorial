const config = require('config');
const mongoose = require('mongoose');

const { log } = require('./logger');

async function connect() {
    const dbUri = config.get("dbUri");

    try {
        await mongoose.connect(dbUri);
        log.info("DB Connected");
    } catch(e) {
        log.error("Could not connect to DB");
        process.exit(1);
    }
}

module.exports = { connect };