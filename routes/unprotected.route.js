const { getRoom } = require("../controllers/room");

const { getFacilities } = require("../controllers/facilities");

const express = require("express");
const { getDetailFacilities } = require("../controllers/getRoomDetail");
const { getRoomBook } = require("../controllers/getRoomBook");
const { createBooking } = require("../controllers/createBook");
const { createFeedback } = require("../controllers/createFeedback");
const { getFeedback } = require("../controllers/feedback");

const router = express.Router();

router.get("/room", getRoom);
router.get("/facilities", getFacilities);
router.get("/detail/:room_id", getDetailFacilities);
router.get("/booking/:room_id", getRoomBook);
router.post("/book", createBooking);
router.post("/feedback", createFeedback);
router.get("/feedback_form/:feedback_id", getFeedback);
module.exports = router;
