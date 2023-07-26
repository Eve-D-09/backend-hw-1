const express = require("express");
const router = express.Router();

//  delete one car by id
router.delete("/car/:id", (req, res) => {

    const id = Number(req.params.id);
    
    //  defensive check that id is a number
    if(Number.isNaN(id)) {
        res.send({ status: 0, reason: "Invalid id"});
        return;
     }

    //  find the index
    const indexOf = req.cars.findIndex((item) => {
        return item.id === id;
    })

    if(indexOf < 0) {
        res.send({ status: 0, reason: "Id is not found, maybe already deleted"});
    }



    //  splice
    req.cars.splice(indexOf, 1);
    res.send({ status: 1 })
    console.log(indexOf);
})

module.exports = router;