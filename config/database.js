const Sequelize = require('sequelize');

 module.exports = new Sequelize('codegig', 'postgres', 'sarang123', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

