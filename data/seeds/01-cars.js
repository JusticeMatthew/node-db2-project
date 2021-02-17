exports.seed = function (knex) {
  return knex('cars')
    .truncate()
    .then(function () {
      return knex('cars').insert([
        {
          vin: '890duj9882jd9o2aj289oi',
          make: 'Metro',
          model: 'Geo',
          mileage: 400000,
          transmission: 'manual',
          title_status: 'clean',
        },
        {
          vin: '8dhaw9o8uihwa89w9',
          make: 'Toyota',
          model: 'Camry',
          mileage: 24003,
          transmission: null,
          title_status: null,
        },
        {
          vin: '2ujnhaeh2iu2iuhiua',
          make: 'Kia',
          model: 'Sportage',
          mileage: 197543,
          transmission: 'automatic',
          title_status: null,
        },
      ]);
    });
};
