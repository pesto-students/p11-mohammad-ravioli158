const { Sequelize } = require("sequelize");

const sequelize = require("../config/db.config");

const TaskModel = sequelize.define("Task", {
  title: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  description: Sequelize.STRING,
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = TaskModel;
