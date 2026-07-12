const { NodeSDK } = require("@opentelemetry/sdk-node");

const {
getNodeAutoInstrumentations
} = require("@opentelemetry/auto-instrumentations-node");

const {
OTLPTraceExporter
} = require("@opentelemetry/exporter-trace-otlp-http");

const traceExporter = new OTLPTraceExporter({

url: "http://alloy:4318/v1/traces"

});

const sdk = new NodeSDK({
  traceExporter,
  instrumentations: [
    getNodeAutoInstrumentations({
      "@opentelemetry/instrumentation-fs": {
        enabled: false,
      },
    }),
  ],
});

sdk.start();

console.log("Tracing initialized");

process.on("SIGTERM", async () => {
  await sdk.shutdown();
});

process.on("SIGINT", async () => {
  await sdk.shutdown();
});