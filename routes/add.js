const express = require("express");
const router = express.Router();
//  import math function
const {genRandomString} = require("../utils/math");

router.post("/car", (req, res) => {
  const { make, model, year, transmission } = req.body;

  const transmissionType = ["a", "m"];

  //  check the content
  if (
    !make ||
    !model ||
    !year ||
    !transmission ||
    typeof make !== "string" ||
    typeof model !== "string" ||
    typeof transmission !== "string" ||
    typeof year !== "number" ||
    !transmissionType.includes(transmission)
  ) {
    res.send({ status: 0, reason: "Incomplete or invalid request" });
    return;
  }

  //    check for duplicates
  const indexOf = req.cars.findIndex((item) => {
    return (
      item.make === make &&
      item.model === model 
  
    );
  });

  //     something went wrong I get message duplicate entry
   //   transmission can be m and a 

  if (indexOf > -1) {
    res.send({ status: 0, reason: "Duplicate entry" });
    return;
  }

  req.cars.push({
    id: genRandomString(16),
    make,
    model,
    year,
    transmission,
  });
  res.send({ status: 1 });

  console.log(req.body);
});

module.exports = router;
