const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/emotions_flashcards', { logging: false });

module.exports = db;

//do not touch!!!