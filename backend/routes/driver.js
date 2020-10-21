const express = require("express");
const router = express.Router();

const {createDriver, allDrivers, updateDriver, deleteDriver} =  require("../controllers/driver");


router.post("/addDriver", createDriver);

router.get("/viewDrivers", allDrivers);

router.post("/updateDrivers/:id", updateDriver);

router.delete("/deleteDriver/:id", deleteDriver);


module.exports = router;
