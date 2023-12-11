"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
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
        primaryKey: true,
        autoIncrement: true
      },
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      no_hp: DataTypes.STRING,
      total_room: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
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