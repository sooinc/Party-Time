const router = require('express').Router({ mergeParams: true });
const { Drink } = require('../db');
module.exports = router;

// /api/drinks
router.get('/', async (req, res, next) => {
  try {
    const drinks = await Drink.findAll();
    res.json(drinks);
  } catch (error) {
    next(error);
  }
});
