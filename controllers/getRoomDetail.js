const { Room } = require("../models");
const { Facilities } = require("../models");

async function getDetailFacilities(req, res) {
  const detail = await Room.findOne({
    where: { room_id: req.params.room_id },
    include:{ model: Facilities, attributes: ["facility_name"] },
  });
  const response = {
    code: 200,
    status: "Ok",
    data: detail,
  };
  return res.status(response.code).json(response);
}

module.exports = {
  getDetailFacilities,
};
