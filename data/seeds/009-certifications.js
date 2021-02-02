const faker = require('faker');

exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('certifications')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('certifications').insert([
        {
          groomer_id: '00ultwew80Onb2vOT4x6',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00ultwew80Onb2vOT4x6',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00ultwqjtqt4VCcS24x6',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00ultwqjtqt4VCcS24x6',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00u13omswyZM1xVya4x7',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00u13oned0U8XP8Mb4x7',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00u13omswyZM1xVya4x7',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00u13omswyZM1xVya4x7',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        // random groomers starts here
        {
          groomer_id: '50db2bcb-270a-44af-abb6-af5467561100',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '50db2bcb-270a-44af-abb6-af5467561100',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '842da89e-56cf-4e8c-9164-08f8a23e6cc1',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '842da89e-56cf-4e8c-9164-08f8a23e6cc1',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '71c6cea0-f653-48f5-8345-2af7c2e40631',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '71c6cea0-f653-48f5-8345-2af7c2e40631',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '5c9817c8-8b4f-4837-a726-a1506c19b9f6',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '5c9817c8-8b4f-4837-a726-a1506c19b9f6',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00e1deca-72a6-4392-8288-467805027632',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '00e1deca-72a6-4392-8288-467805027632',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '0524b5fb-4335-4b72-addd-a8485ee4bd08',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '0524b5fb-4335-4b72-addd-a8485ee4bd08',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: 'f6da0d64-5965-4c3c-b0e5-733646cea98c',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: 'f6da0d64-5965-4c3c-b0e5-733646cea98c',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '5ce25a3a-c387-4208-a668-057eb5975c48',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '5ce25a3a-c387-4208-a668-057eb5975c48',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '94a75178-b60e-47b4-8a64-7fd7d1a17660',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: '94a75178-b60e-47b4-8a64-7fd7d1a17660',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: 'ab7b2f78-dedd-492c-8bba-cb17a2391346',
          title: 'Cats',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
        {
          groomer_id: 'ab7b2f78-dedd-492c-8bba-cb17a2391346',
          title: 'Dogs',
          institute: 'Institute of Cats Grooming',
          image: faker.image.cats(),
          date_issued: 1610224700,
          date_expired: 1925757500,
        },
      ]);
    });
};
