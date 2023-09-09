const {User} = require('../models');
// const path = require('path');

const userData = [
    {
        name: "Sam Beekman",
        email: "sambeekman@hotmail.com",
        password: "123456789"
    },
    {
        name: "Bianca Mathieu",
        email: "Blazybutt@gmail.com",
        password: "987654321"
    },
    {
        name: "Tom TA",
        email: "TomTA@mail.com",
        password: "asdfghjkl"
    },
    {
        name: "Coach Tri",
        email: "TressAreGreen@y7mail.com",
        password: "lkjhgfdsa"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;