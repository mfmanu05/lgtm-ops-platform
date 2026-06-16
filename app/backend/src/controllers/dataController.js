const logger = require("../logging/logger");
const { faker } = require("@faker-js/faker");


exports.generate = (req,res)=>{


logger.info("Generating fake data");


const data = {

 id: faker.string.uuid(),

 user: faker.person.fullName(),

 email: faker.internet.email(),

 amount:
 faker.number.int({
 min:100,
 max:1000
 }),

 created:
 new Date()

};


res.json(data);


};
