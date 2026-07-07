const logger = require("../logging/logger");

const {
    activeUsers,
    businessErrors
} = require("../observability/business.metrics");

// =========================
// Retorna erro 500
// =========================
exports.error = (req, res) => {

    logger.error("Debug endpoint: Internal Server Error");

    businessErrors.inc();

    res.status(500).json({
        success: false,
        message: "Erro interno simulado."
    });

};

// =========================
// Simula lentidão
// =========================
exports.slow = async (req, res) => {

    logger.info("Debug endpoint: Slow request");

    await new Promise(resolve => setTimeout(resolve, 5000));

    res.json({
        success: true,
        delay: "5 seconds"
    });

};

// =========================
// Consome CPU
// =========================
exports.cpu = (req, res) => {

    logger.warn("Debug endpoint: CPU stress");

    const end = Date.now() + 10000;

    while (Date.now() < end) {
        Math.sqrt(Math.random());
    }

    logger.warn("CPU stress completed.");
};

// =========================
// Consome memória
// =========================
let allocations = [];

exports.memory = (req, res) => {

    logger.warn("Debug endpoint: Memory allocation");

    allocations.push(Buffer.alloc(50 * 1024 * 1024));

    const users = Math.floor(Math.random() * 100);

    activeUsers.set(users);

    logger.info(`Active users simulated: ${users}`);

    res.json({
        success: true,
        allocated: allocations.length * 50 + " MB",
        activeUsers: users
    });

};

// =========================
// Limpa memória
// =========================
exports.clearMemory = (req, res) => {

    allocations = [];

    activeUsers.set(0);

    global.gc && global.gc();

    logger.info("Allocated memory released.");

    res.json({
        success: true
    });

};