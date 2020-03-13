const Sequelize = require('sequelize');
const db = require('./db');

const Drink = db.define('drink', {
  name: {
    type: Sequelize.STRING,
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
  steps: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
  level: {
    type: Sequelize.ENUM(['easy', 'average', 'advanced']),
  },
  servingSize: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  image: {
    type: Sequelize.TEXT,
  },
  category: {
    type: Sequelize.STRING,
  },
});

module.exports = Drink;
