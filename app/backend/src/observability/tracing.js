const { NodeSDK } = require("@opentelemetry/sdk-node");
const {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
  BatchSpanProcessor // Batch é mais performático para produção que o Simple
} = require("@opentelemetry/sdk-trace-base");
const {
  getNodeAutoInstrumentations
} = require("@opentelemetry/auto-instrumentations-node");
const {
  OTLPTraceExporter
} = require("@opentelemetry/exporter-trace-otlp-http");

// 1. Seu exporter principal (Alloy)
const traceExporter = new OTLPTraceExporter({
  url: "http://alloy:4318/v1/traces"
});

// 2. Se quiser também debugar no console, criamos o processor manualmente
const consoleProcessor = new SimpleSpanProcessor(new ConsoleSpanExporter());

const sdk = new NodeSDK({
  // O NodeSDK aceita o exporter principal direto aqui
  traceExporter, 
  
  // Para adicionar processors extras (como o de console), usamos o spanProcessors
  spanProcessors: [consoleProcessor], 
  
  instrumentations: [
    getNodeAutoInstrumentations({
      "@opentelemetry/instrumentation-fs": {
        enabled: false,
      },
    }),
  ],
});

// Removido o bloco sdk.configureTracerProvider(...) que quebrava o código

sdk.start();

console.log("Tracing initialized");

// Garante o graceful shutdown
const shutdown = async () => {
  try {
    await sdk.shutdown();
    console.log("Tracing stopped");
    process.exit(0);
  } catch (error) {
    console.error("Error stopping tracing", error);
    process.exit(1);
  }
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);