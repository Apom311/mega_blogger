const { User } = require('../models');

const userData = [
  {
    username: 'super_jeff',
    email: 'jeff@jeff.com',
    password: 'jeff',
  },
  {
    username: 'anActual-uniCorn',
    email: 'rainbowJack@pony.net',
    password: 'sparkle',
  },
  {
    username: 'frothy',
    email: 'frothandfoam@reference.org',
    password: 'pa$$w0rd',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
