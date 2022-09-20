const seedPosts = require('./postSeed');
const seedUsers = require('./userSeed');
const seedComments = require('./commentSeed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedPosts();
  await seedComments();

  process.exit(0);
};

seedAll();
