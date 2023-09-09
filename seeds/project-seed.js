const { Project } = require('../models');
// const path = require('path');

const projectData = [
    {
        name: "Sams Post",
        description: "This is a post by Sam",
        date_created: "2023-09-05",
        user_id: 1
    },
    {
        name: "B's Post",
        description: "This is a post by B",
        date_created: "2023-09-06",
        user_id: 2
    },
    {
        name: "Tom's Post",
        description: "This is a post by Tom",
        date_created: "2023-09-07",
        user_id: 3
    },
    {
        name: "Tri's Post",
        description: "This is a post by Tri",
        date_created: "2023-09-08",
        user_id: 4
    }

];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;

// date format could be wrong