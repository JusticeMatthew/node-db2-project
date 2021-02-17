const express = require('express');
const server = express();

const carRouter = require('../api/cars/cars-router');

server.use(express.json());
server.use('/api/cars', carRouter);

server.get('/', (_, res) => {
  res.send('Server up good buddy');
});

server.use('*', (_, res) => {
  res.status(404).json({ message: '404 not found' });
});

module.exports = server;
