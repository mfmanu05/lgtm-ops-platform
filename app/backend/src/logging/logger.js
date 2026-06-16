const pino = require("pino");

const logger = pino({
    level: "info",
    base: {
        service: "lgtm-api"
    },
    timestamp: pino.stdTimeFunctions.isoTime
});


module.exports = logger;
