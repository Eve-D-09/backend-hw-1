const express = require("express");
const router = express.Router();

//  get all the cars
router.get("/cars", (req,res) => {
    res.send({ status: 1, cars: req.cars});
})

//  to get one specific car
router.get("/car/:id", (req,res) => {

    const id = Number(req.params.id);
    //  defensive check that id is a number
    if(Number.isNaN(id)) {
       res.send({ status: 0, reason: "Invalid id"});
       return;
    }




    //  copy of data
    const _cars = [...req.cars];

    //  find the one item
    const car = _cars.find((c) => {
       return c.id === id;
    })

    //  if id does not exist (like 99)
    if(!car) {
        res.send({ status: 0, reason: "Id is not found"});
    }

    res.send({ status: 1, car});
});


module.exports = router;
