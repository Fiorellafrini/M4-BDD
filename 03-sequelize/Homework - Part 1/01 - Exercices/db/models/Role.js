const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Role', {
      name: {
         type: DataTypes.FLOAT,
      allowNull: false,
      unique: true
         
      },
      description: {
         type: DataTypes.STRING,
      },
   });
};
