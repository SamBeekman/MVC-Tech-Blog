const sequelize = require('../config/connection');
const userData = require('./user-seed');
const postData = require('./post-seed');
const commentData = require('./comment-seed');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    await userData();
    await postData();
    await commentData();
    process.exit();
};

seedAll();