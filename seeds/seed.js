const sequelize = require('../config/connection');
const projectData = require('./project-seed');
const userData = require('./user-seed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await userData();
    await projectData();
    process.exit();
};

seedAll();