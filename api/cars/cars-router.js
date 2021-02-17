const express = require('express');
const Car = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await Car.getAll();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Car.getById(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = await Car.insert(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.use((error, req, res, next) => {
  res.status(500).json({
    info: 'Something broke :(',
    message: error.message,
    stack: error.stack,
  });
});

module.exports = router;
