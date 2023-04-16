const Sequelize = require("sequelize");
const db = require("./database.js");

const Card = db.define("card", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  front: {
    type: Sequelize.STRING,
    defaultValue: "defaultimg.png",
  },
  back: {
    type: Sequelize.STRING,
    defaultValue: "defaultimg.png",
  },
});

module.exports = Card;
