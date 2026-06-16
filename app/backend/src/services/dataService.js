const { faker } = require("@faker-js/faker");


exports.create = ()=>{


return {

    id:faker.string.uuid(),

    user:
        faker.person.fullName(),

    email:
        faker.internet.email(),

    amount:
        faker.number.int({
            min:10,
            max:1000
        }),

    created:
        new Date()

};


};
