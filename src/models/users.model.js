const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const Users = db.define('users', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'client',
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'available',
  },
});

module.exports = Users;
