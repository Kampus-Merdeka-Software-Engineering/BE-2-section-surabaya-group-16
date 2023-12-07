"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "facilities",
      [
        { facility_name: "Private Chauffeur Services", room_id: 1 },
        { facility_name: "Live Music Lounge", room_id: 1 },
        { facility_name: "Exclusive Dining Experiences", room_id: 1 },
        { facility_name: "Limousine Service On-Demand", room_id: 1 },
        { facility_name: "VIP In-Room Service", room_id: 1 },
        { facility_name: "City Exploration Packages", room_id: 2 },
        { facility_name: "Lounge Sunset Cocktails", room_id: 2 },
        { facility_name: "Complimentary Drink Selection", room_id: 2 },
        { facility_name: "Personalized City Views", room_id: 2 },
        { facility_name: "24/7 Mini Bar", room_id: 2 },
        { facility_name: "24/7 Fitness Access", room_id: 3 },
        { facility_name: "Ergonomic Pillow Menu", room_id: 3 },
        { facility_name: "Rainfall Shower Experience", room_id: 3 },
        { facility_name: "Exclusive Housekeeping Service", room_id: 3 },
        { facility_name: "Personalized In-Room Comfort", room_id: 3 },
        { facility_name: "Timeless Luxury", room_id: 4 },
        { facility_name: "Poolside Relaxation", room_id: 4 },
        { facility_name: "Culinary Delights", room_id: 4 },
        { facility_name: "Evening Lounge Entertainment", room_id: 4 },
        { facility_name: "Daily Housekeeping Service", room_id: 4 },
        { facility_name: "Contemporary Elegance", room_id: 5 },
        { facility_name: "Smart Room Controls", room_id: 5 },
        { facility_name: "In-Room Entertainment", room_id: 5 },
        { facility_name: "Personalized Minibar Selection", room_id: 5 },
        { facility_name: "24/7 Room Service", room_id: 5 },
        { facility_name: "Opulent Spa Experience", room_id: 6 },
        { facility_name: "VIP Concierge Service", room_id: 6 },
        { facility_name: "Gourmet Dining Options", room_id: 6 },
        { facility_name: "Exclusive Minibar Selection", room_id: 6 },
        { facility_name: "24/7 Room Refreshments", room_id: 6 },
        { facility_name: "Exclusive Lounge Access", room_id: 7 },
        { facility_name: "Panoramic City Views", room_id: 7 },
        { facility_name: "Complimentary Drink Options", room_id: 7 },
        { facility_name: "Executive Lounge Refreshments", room_id: 7 },
        { facility_name: "In-Room Spa Services", room_id: 7 },
        { facility_name: "Personal Makeup Artist", room_id: 8 },
        { facility_name: "Luxury Slipper Collection", room_id: 8 },
        { facility_name: "Helicopter Shuttle Service", room_id: 8 },
        { facility_name: "VIP Dining Experiences", room_id: 8 },
        { facility_name: "Exclusive VIP Room Service", room_id: 8 },
        { facility_name: "24/7 Fitness Access", room_id: 9 },
        { facility_name: "Ergonomic Pillow Menu", room_id: 9 },
        { facility_name: "Rainfall Shower Experience", room_id: 9 },
        { facility_name: "Exclusive Housekeeping Service", room_id: 9 },
        { facility_name: "Personalized In-Room Comfort", room_id: 9 },
        { facility_name: "Free Meeting Room Access", room_id: 10 },
        { facility_name: "Gourmet Room Service", room_id: 10 },
        { facility_name: "Coffee and Tea Choices", room_id: 10 },
        { facility_name: "Cozy Meeting Spaces", room_id: 10 },
        { facility_name: "Personalized Service Requests", room_id: 10 },
        { facility_name: "Kid-Friendly Views", room_id: 11 },
        { facility_name: "Family Concierge Assistance", room_id: 11 },
        { facility_name: "Stroller Rental Services", room_id: 11 },
        { facility_name: "Child-Friendly Room Service", room_id: 11 },
        { facility_name: "24/7 Kids TV Channels", room_id: 11 },
        { facility_name: "Poolside Views", room_id: 12 },
        { facility_name: "Lounge Fitness Coaching", room_id: 12 },
        { facility_name: "Private Fitness Sessions", room_id: 12 },
        { facility_name: "Lounge Relaxation", room_id: 12 },
        { facility_name: "Personalized In-Room Comfort", room_id: 12 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
