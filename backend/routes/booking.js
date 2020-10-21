const express = require("express");

const {
  addBooking,
  deleteBookings,
  getScannedBookings,
  getUnscannedBookings,
} = require("../controllers/booking");

const router = express.Router();

router.route("/createBooking").post(addBooking);

router.route("/scanned").get(getScannedBookings);
router.route("/unScanned").get(getUnscannedBookings);

router.route("/:id").delete(deleteBookings);

module.exports = router;
