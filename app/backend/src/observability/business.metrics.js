const client = require("prom-client");
const { register } = require("./metrics");

/*
=======================================
Business Metrics
=======================================
*/

const fakeDataGenerated = new client.Counter({
    name: "lgtm_fake_data_generated_total",
    help: "Total fake records generated"
});

const businessErrors = new client.Counter({
    name: "lgtm_business_errors_total",
    help: "Business errors"
});

const activeUsers = new client.Gauge({
    name: "lgtm_active_users",
    help: "Current active users"
});

const dataGenerationTime = new client.Histogram({
    name: "lgtm_data_generation_seconds",
    help: "Time spent generating data",
    buckets: [0.01,0.05,0.1,0.3,0.5,1,2]
});

/*
=======================================
NEW
=======================================
*/

const generatedRecords = new client.Counter({
    name: "lgtm_generated_records_total",
    help: "Total generated records"
});

const apiRequests = new client.Counter({
    name: "lgtm_api_requests_total",
    help: "Total API requests",
    labelNames:["endpoint"]
});

register.registerMetric(fakeDataGenerated);
register.registerMetric(businessErrors);
register.registerMetric(activeUsers);
register.registerMetric(dataGenerationTime);

register.registerMetric(generatedRecords);
register.registerMetric(apiRequests);

module.exports = {

    fakeDataGenerated,

    businessErrors,

    activeUsers,

    dataGenerationTime,

    generatedRecords,

    apiRequests

};