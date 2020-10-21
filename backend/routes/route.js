const express = require("express");
const router = express.Router();

const {createRoute, allRoutes, deleteRoute, updateRoute, haltsInRoute, haltsInName } =  require("../controllers/route");


router.post("/addRoute", createRoute);

router.get("/viewRoutes", allRoutes);

router.post("/updateRoute/:id", updateRoute);

router.delete("/deleteRoute/:id", deleteRoute);

router.get("/halts/:slug", haltsInRoute);

module.exports = router;
