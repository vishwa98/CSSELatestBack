const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');

const routeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 50,
    },

    price: {
        type: Number,
        trim: true,
        maxlength: 50,
    },

    slug: {
        type: String,
    },

    halts: [{
        haltName: String,
        distance: String,
        haltNumber: Number,
    }],

  },
  { timestamps: true }
);

routeSchema.pre("save", function(next) {
    this.slug = uuidv4();
    next();
});

module.exports = mongoose.model("Route", routeSchema);
