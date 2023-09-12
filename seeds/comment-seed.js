const { Comment } = require('../models');


const commentData = [
    {
        description: "This is a comment by Sam",
        user_id: 1,
        post_id: 1
    },
    {
        description: "This is a comment by B",
        user_id: 2,
        post_id: 2
    },
    {
        description: "This is a comment by Tom",
        user_id: 3,
        post_id: 3
    },
    {
        description: "This is a comment by Tri",
        user_id: 4,
        post_id: 4
    }

];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
