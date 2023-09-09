const { User } = require('../models');
// const path = require('path');

const userData = [
    {
        username: "Sam Beekman",
        email: "sambeekman@hotmail.com",
        password: "123456789"
    },
    {
        username: "Bianca Mathieu",
        email: "Blazybutt@gmail.com",
        password: "987654321"
    },
    {
        username: "Tom TA",
        email: "TomTA@mail.com",
        password: "asdfghjkl"
    },
    {
        username: "Coach Tri",
        email: "TressAreGreen@y7mail.com",
        password: "lkjhgfdsa"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;