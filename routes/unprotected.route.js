const express = require("express");
const router = express.Router();

const { getRoom } = require("../controllers/room");
const { getFacilities } = require("../controllers/facilities");
const { getDetailFacilities } = require("../controllers/getRoomDetail");
const { getRoomBook } = require("../controllers/getRoomBook");
const { createBooking } = require("../controllers/createBook");
const { createFeedback } = require("../controllers/createFeedback");
const { getFeedback } = require("../controllers/feedback");

router.get("/room", getRoom);
router.get("/facilities", getFacilities);
router.get("/detail/:room_id", getDetailFacilities);
router.get("/booking/:room_id", getRoomBook);
router.post("/book", createBooking);
router.post("/feedbacks", createFeedback);
router.get("/feedbacks/:feedback_id", getFeedback);

module.exports = router;