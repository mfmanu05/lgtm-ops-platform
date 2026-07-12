const { faker } = require("@faker-js/faker");

const {

    fakeDataGenerated,

    generatedRecords,

    dataGenerationTime,

    apiRequests,

    businessErrors

} = require("../observability/business.metrics");


exports.create = () => {

    const tracer = trace.getTracer("lgtm-api");

    return tracer.startActiveSpan("generate_fake_data", (span) => {

        const end = dataGenerationTime.startTimer();

        try {

            apiRequests.inc({
                endpoint: "/api/generate"
            });

            const data = {

                id: faker.string.uuid(),

                user: faker.person.fullName(),

                email: faker.internet.email(),

                amount: faker.number.int({
                    min:10,
                    max:1000
                }),

                created:new Date()

            };

            fakeDataGenerated.inc();

            generatedRecords.inc();

            span.setAttribute("records.generated", 1);

            span.setAttribute("business.operation", "generate_fake_data");

            span.addEvent("Fake data generated");

            end();

            span.end();

            return data;

        } catch(err){

            businessErrors.inc();

            span.recordException(err);

            span.setStatus({
                code: 2
            });

            span.end();

            end();

            throw err;

        }

    });

};