const express = require("express");
const cors = require("cors");

const metricsMiddleware = require("./middlewares/metrics.middleware");
const { register } = require("./observability/metrics");

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use(express.json());
app.use(metricsMiddleware);


app.get("/health", (req,res)=>{
    res.json({
        status:"UP",
        service:"lgtm-api"
    });
});

app.use("/api", require("./routes/api"));

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});





const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`API running on port ${PORT}`);
});
