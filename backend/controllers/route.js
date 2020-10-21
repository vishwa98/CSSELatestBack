const Route = require("../models/route");
const { errorHandler } = require("../helpers/dbErrorHandler");

//@desc Create a route
//@route POST api/addRoute
//@ access public

exports.createRoute = (req, res) => {
  console.log("req.body", req.body);

  const route = new Route(req.body);

  route.save((err, room) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json(route);
  });
};

//@desc Display all routes
//@route GET api/viewRoutes
//@ access public

exports.allRoutes = (req, res) => {
  Route.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else {
      res.json(data);
    }
  });
};

//@desc Display halts in a route
//@route GET api/halts/:slug
//@ access public

exports.haltsInRoute = (req, res) => {
  const rom = req.params.slug;
  const p = req.query.p ? req.query.p : 1;

  Route.find({ slug: rom }, (err, rooms) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json(rooms);
  });
};


//@desc Update route
//@route POST api/updateRoute/:id
//@ access public

exports.updateRoute = (req, res) => {
  Route.findByIdAndUpdate(
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
      }
    }
  );
};

//@desc Delete route
//@route DELETE api/deleteRoute/:id
//@ access public

exports.deleteRoute = (req, res) => {
  Route.findByIdAndRemove(req.params.id, (err, data) => {
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
