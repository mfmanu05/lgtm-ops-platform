const logger = require("../logging/logger");

const dataService = require("../services/dataService");

const { faker } = require("@faker-js/faker");


exports.generate = (req,res)=>{


logger.info("Generating fake data");


const data = dataService.create();

res.json(data);


};
