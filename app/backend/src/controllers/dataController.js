const service = require("../services/dataService");


exports.generate = (req,res)=>{


    const data = service.create();


    req.log.info({
        event:"data_generated",
        payload:data
    });


    res.json(data);

};
