"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Rooms", {
      room_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      room_name: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      category_name: {
        type: Sequelize.STRING,
      },
      available: {
        type: Sequelize.INTEGER,
      },
      main_image: {
        type: Sequelize.STRING,
      },
      detail_image1: {
        type: Sequelize.STRING,
      },
      detail_image2: {
        type: Sequelize.STRING,
      },
      detail_image3: {
        type: Sequelize.STRING,
      },
      discount: {
        type: Sequelize.FLOAT,
      },
      room_description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Rooms");
  },
};
