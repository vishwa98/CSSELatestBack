const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');

const inspectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 50,
    },

    password: {
        type: String,
      },

    route: {
        type: String,
      },

    slug: {
        type: String,
    },
  },
  { timestamps: true }
);

inspectorSchema.pre("save", function(next) {
    this.slug = uuidv4();
    next();
});

module.exports = mongoose.model("Inspector", inspectorSchema);
