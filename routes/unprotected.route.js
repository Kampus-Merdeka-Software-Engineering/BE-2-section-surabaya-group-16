const { getRoom } = require("../controllers/room");

const { getFacilities } = require("../controllers/facilities");

const express = require("express");
const { getDetailFacilities } = require("../controllers/getRoomDetail");

const router = express.Router();

router.get("/room", getRoom);
router.get("/facilities", getFacilities);
router.get("/detail/:room_id", getDetailFacilities);
module.exports = router;
