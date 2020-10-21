const Inspector = require("../models/inspector");
const { errorHandler } = require("../helpers/dbErrorHandler");

//@desc Create a inspector
//@route POST api/addInspector
//@ access public

exports.createInspector = (req, res) => {
  console.log("req.body", req.body);

  const inspector = new Inspector(req.body);

  inspector.save((err, inspector) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json(inspector);
  });
};

//@desc Display all inspectors
//@route GET api/viewInspectors
//@ access public

exports.allInspectors = (req, res) => {
  Inspector.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else {
      res.json(data);
    }
  });
};

//@desc Update inspector
//@route POST api/updateInspectors/:id
//@ access public

exports.updateInspector = (req, res) => {
  Inspector.findByIdAndUpdate(
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

//@desc Delete inspector
//@route DELETE api/deleteInspector/:id
//@ access public

exports.deleteInspector = (req, res) => {
  Inspector.findByIdAndRemove(req.params.id, (err, data) => {
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
