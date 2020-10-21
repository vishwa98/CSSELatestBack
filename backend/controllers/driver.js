const Driver = require("../models/driver");
const { errorHandler } = require("../helpers/dbErrorHandler");

//@desc Create a driver
//@route POST api/addDriver
//@ access public

exports.createDriver = (req, res) => {
  console.log("req.body", req.body);

  const driver = new Driver(req.body);

  driver.save((err, driver) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json(driver);
  });
};

//@desc List all drivers
//@route GET api/viewDrivers
//@ access public
exports.allDrivers = (req, res) => {
  Driver.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else res.json(data);
  });
};

//@desc Update driver
//@route POST api/updateDrivers/:id
//@ access public
exports.updateDriver = (req, res) => {
  Driver.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else {
        res.json(data);
        console.log("Post updated");
      }
    }
  );
};

//@desc Delete driver
//@route DELETE api/deleteDriver/:id
//@ access public
exports.deleteDriver = (req, res) => {
  Driver.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};
