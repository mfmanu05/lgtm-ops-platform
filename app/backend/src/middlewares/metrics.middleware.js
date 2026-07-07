const {
    httpRequestsTotal,
    httpRequestDuration,
  } = require("../observability/metrics");
  
  module.exports = (req, res, next) => {
    const end = httpRequestDuration.startTimer();
  
    res.on("finish", () => {
      const labels = {
        method: req.method,
        route: req.route ? req.route.path : req.path,
        status: res.statusCode,
      };
  
      httpRequestsTotal.inc(labels);
      end(labels);
    });
  
    next();
  };