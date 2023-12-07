'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Room = Facilities.belongsTo(models.Room, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        foreignKey: {
          name: "room_id",
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      });
    }
  }
  Facilities.init({
    facility_id :  {
      type:DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true
    },
    facility_name : DataTypes.STRING,
    room_id : DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
   {
    sequelize,
    modelName: 'Facilities',
    tableName: 'facilities'
  });
  return Facilities;
};