const express = require("express");
const pinoHttp = require("pino-http");

const logger = require("./logging/logger");

const apiRoutes = require("./routes/api");


const app = express();

app.use(express.json());

app.use(
    pinoHttp({
        logger
    })
);


app.use("/api", apiRoutes);


app.get("/health", (req,res)=>{

    req.log.info("health check executed");

    res.json({
        status:"UP",
        service:"lgtm-api"
    });

});


const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{

    logger.info(
        `Application running on port ${PORT}`
    );

});
