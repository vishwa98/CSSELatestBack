const express = require("express");
const router = express.Router();

const {createInspector, allInspectors, updateInspector, deleteInspector} =  require("../controllers/inspector");


router.post("/addInspector", createInspector);

router.get("/viewInspectors", allInspectors);

router.post("/updateInspectors/:id", updateInspector);

router.delete("/deleteInspector/:id", deleteInspector);


module.exports = router;
