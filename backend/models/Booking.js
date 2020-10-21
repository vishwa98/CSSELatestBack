const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    route: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    startHalt: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    endHalt: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    isScanned: {
      type: Boolean,
    },
    fair: {
      type: Number,
    },
    fname: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    lname: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 50,
    },
  },

  { timestamps: true },

  { collection: "Bookings" }
);

module.exports = mongoose.model("Booking", bookingSchema);
