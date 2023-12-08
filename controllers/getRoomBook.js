const { Room, Book } = require("../models");

async function getRoomBook(req, res) {
  const booking = await Room.findOne({
    where: { room_id: req.params.room_id },
    include:{ model: Book},
  });
  const response = {
    code: 200,
    status: "Ok",
    data: booking,
  };
  return res.status(response.code).json(response);
}

module.exports = {
    getRoomBook
};
