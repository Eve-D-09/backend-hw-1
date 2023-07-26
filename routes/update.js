const express = require("express");
const router = express.Router();

router.patch("/car/:id", (req, res) => {
  console.log(req.body, req.params.id);

  const transmissionType = ["a", "m"];

  const id = Number(req.params.id);

  //  defensive check that id is a number
  if (Number.isNaN(id)) {
    res.send({ status: 0, reason: "Invalid id" });
    return;
  }

  

  //  find item in the array
  const indexOf = req.cars.findIndex((item) => {
    return item.id === id;
  });

  //  does not find you
  if (indexOf === -1) {
    res.send({ status: 1, reason: "Id not found" });
    return;
  }

  const { make, model, year, transmission } = req.body;

  // repetition is for security
  if (make && typeof make === "string") {
    req.cars[indexOf].make = make;
  }
  if (model && typeof model === "string") {
    req.cars[indexOf].model = model;
  }
  if (year && typeof year === "number") {
    req.cars[indexOf].year = year;
  }
  if (
    transmission &&
    typeof transmission === "string" &&
    transmissionType.includes(transmission)
  ) {
    req.cars[indexOf].transmission = transmission;
  }
  res.send({ status: 1 });

  console.log(indexOf);
});

module.exports = router;
