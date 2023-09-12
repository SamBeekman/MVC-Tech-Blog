const { Post } = require('../models');


const postData = [
    {
        post_title: "Sams Post",
        description: "This is a post by Sam",
        // date_created: "2023-09-05",
        user_id: 1
    },
    {
        post_title: "B's Post",
        description: "This is a post by B",
        // date_created: "2023-09-06",
        user_id: 2
    },
    {
        post_title: "Tom's Post",
        description: "This is a post by Tom",
        // date_created: "2023-09-07",
        user_id: 3
    },
    {
        post_title: "Tri's Post",
        description: "This is a post by Tri",
        // date_created: "2023-09-08",
        user_id: 4
    }

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

