const BadCustomer = require("../models/badCustomer")

exports.badCustomerDetails = (req,res) => {

    res.json({ message : "bad  customer"});
};

exports.createBadCustomer = (req,res) => {

    console.log("req.body", req.body);

    const badCustomer = new BadCustomer(req.body);

    badCustomer.save((error, badCustomer) => {

        if (error){
            res.json(error);
        }

        res.json(badCustomer);

    })
};

exports.badCustomerList = (req,res) => {

    BadCustomer.find().exec((error, data) => {
        if(error){
            res.json(error)

        }
        else

        res.json(data);
    });
};

exports.delBadCustomer = (req,res) => {

    BadCustomer.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
            res.json(error);
        }
        else{
            res.status(200).json({
                msg : data
            })
        }
    })
}