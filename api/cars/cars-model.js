// require db, make 'actions'
const db = require('../../data/db-config.js');

const getAll = () => {
  return db('cars');
};

const getById = (id) => {
  return db('cars').where('id', id).first();
};

const insert = (data) => {
  return db('cars')
    .insert(data)
    .then(([id]) => {
      return db('cars').where('id', id).first();
    });
};

module.exports = {
  getAll,
  getById,
  insert,
};
