const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
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
    phoneNumber: {
      type: String,
      trim: true,
      maxlength: 50,
    },
    password: {
      type: String,
      trim: true,
      maxlength: 50,
    },
  },
  { collection: "Customers" }
);

module.exports = mongoose.model("Customer", customerSchema);
