const { faker } = require("@faker-js/faker");

const {

    fakeDataGenerated,

    generatedRecords,

    dataGenerationTime,

    apiRequests,

    businessErrors

} = require("../observability/business.metrics");


exports.create = (quantity = 1) => {

    const end = dataGenerationTime.startTimer();

    try {

        apiRequests.inc({
            endpoint: "/api/data"
        });

        const data = {

            id: faker.string.uuid(),

            user: faker.person.fullName(),

            email: faker.internet.email(),

            amount: faker.number.int({
                min: 10,
                max: 1000
            }),

            created: new Date()

        };

        fakeDataGenerated.inc();

        generatedRecords.inc();

        end();

        return data;

    } catch (err) {

        businessErrors.inc();

        end();

        throw err;

    }

};