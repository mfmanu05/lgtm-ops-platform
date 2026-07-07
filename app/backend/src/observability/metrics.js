const client = require("prom-client");

const register = new client.Registry();

// Coleta métricas padrão do Node.js
client.collectDefaultMetrics({
  register,
  prefix: "lgtm_",
});

// Contador de requisições
const httpRequestsTotal = new client.Counter({
  name: "lgtm_http_requests_total",
  help: "Total de requisições HTTP",
  labelNames: ["method", "route", "status"],
});

// Tempo de resposta
const httpRequestDuration = new client.Histogram({
  name: "lgtm_http_request_duration_seconds",
  help: "Tempo de resposta das requisições",
  labelNames: ["method", "route", "status"],
  buckets: [0.01, 0.05, 0.1, 0.3, 0.5, 1, 2, 5],
});

register.registerMetric(httpRequestsTotal);
register.registerMetric(httpRequestDuration);

module.exports = {
  register,
  httpRequestsTotal,
  httpRequestDuration,
};