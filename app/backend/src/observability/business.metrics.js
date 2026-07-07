const client = require("prom-client");
const { register } = require("./metrics");

// Quantidade de dados gerados
const fakeDataGenerated = new client.Counter({
    name: "lgtm_fake_data_generated_total",
    help: "Total de dados fictícios gerados"
});

// Erros de negócio
const businessErrors = new client.Counter({
    name: "lgtm_business_errors_total",
    help: "Total de erros de negócio"
});

// Usuários ativos
const activeUsers = new client.Gauge({
    name: "lgtm_active_users",
    help: "Usuários ativos simulados"
});

// Tempo de geração de dados
const dataGenerationTime = new client.Histogram({
    name: "lgtm_data_generation_seconds",
    help: "Tempo de geração dos dados",
    buckets: [0.01,0.05,0.1,0.2,0.5,1,2]
});

register.registerMetric(fakeDataGenerated);
register.registerMetric(businessErrors);
register.registerMetric(activeUsers);
register.registerMetric(dataGenerationTime);

module.exports = {
    fakeDataGenerated,
    businessErrors,
    activeUsers,
    dataGenerationTime
};