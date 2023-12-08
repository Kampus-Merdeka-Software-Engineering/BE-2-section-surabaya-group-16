"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.Room = Book.belongsTo(models.Room, {
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
  Book.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        defaultValue: DataTypes.INTEGER,
        primaryKey: true,
      },
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      no_hp: DataTypes.STRING,
      total_room: DataTypes.INTEGER,
      room_id: DataTypes.INTEGER,
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
      modelName: "Book",
    }
  );
  return Book;
};
