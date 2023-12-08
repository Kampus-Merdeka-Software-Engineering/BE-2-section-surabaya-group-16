'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Facilities', {
      facility_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facility_name: {
        type: Sequelize.STRING
      },
      room_id :  {
        type:Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },});
      await queryInterface.addConstraint("facilities", {
        fields: ["room_id"],
        type: "foreign key",
        references: {
          table: "rooms",
          field: "room_id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Facilities');
  }
};