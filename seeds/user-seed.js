const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "Sam Beekman",
        email: "sambeekman@hotmail.com",
        password: "123456789"
    },
    {
        id: 2,
        username: "Bianca Mathieu",
        email: "Blazybutt@gmail.com",
        password: "987654321"
    },
    {
        id: 3,
        username: "Tom TA",
        email: "TomTA@mail.com",
        password: "asdfghjkl"
    },
    {
        id: 4,
        username: "Coach Tri",
        email: "TressAreGreen@y7mail.com",
        password: "lkjhgfdsa"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

// unable to login with seeds, possibly because password is not hashed in seed?