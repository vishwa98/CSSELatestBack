const mongoose = require("mongoose");

const { v4: uuidv4 } = require('uuid');

const badCustomerSchema = new mongoose.Schema(
  {

    currentHalt: {
      type: String,
    },

    inspectorName: {
      type: String,
    },

    badCustomerId: {
      type: String,
    },

    booking: [{
      route: String,
      startHalt: String,
      endHalt: String,
      isScanned: Boolean,
      fair: Number,
      fname:String,
      lname:String,
      phone:String,
    }]

  },
  { collection: "BadCustomers" }
);

badCustomerSchema.pre("save", function(next) {
    this.badCustomerId = uuidv4();
    next();
});

module.exports = mongoose.model("BadCustomer", badCustomerSchema);
