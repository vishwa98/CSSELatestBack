const express = require("express");
const router = express.Router();

const { badCustomerDetails, createBadCustomer, badCustomerList, delBadCustomer } =  require("../controllers/badCustomer");

//router.get("/", badCustomerDetails);

router.post("/createBadCustomer", createBadCustomer);

router.get("/badCustomers", badCustomerList);

//router.post("/badCustomer/:id", updateBadCustomer);

router.delete("/delBadCustomer/:id", delBadCustomer);


module.exports = router;
