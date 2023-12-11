const { Book } = require("../models");

async function createBooking(req, res) {
  try {
    const { check_in, check_out, name, email, no_hp, total_room, total_price, room_id} =
      req.body;
    const book = await Book.create({
      check_in: check_in,
      check_out: check_out,
      name: name,
      email: email,
      no_hp: no_hp,
      total_room: total_room,
      total_price: total_price,
      room_id : room_id
    });
    const response = {
      code: 201,
      status: "Created",
      data: book,
    };
    return res.status(response.code).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: "An error occurred while processing your request",
    });
  }
}
module.exports = {
  createBooking,
};
