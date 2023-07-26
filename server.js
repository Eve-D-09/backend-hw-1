const express = require("express");
const app = express();
//  import cars
const cars = require("./cars.json");

// give an id for each car
cars.forEach((item, index) => {
  item.id = index + 1;
});

//  add middleware
app.use((req, res, next) => {
  console.log("new request!");
  next();
})

//  pass cars down using middleware, will be available evrywhere inside program
app.use((req, res, next) => {
  req.cars = cars;
  next();
})

//convert the body to json
app.use(express.json());

app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"));
app.use("/update", require("./routes/update"));


const port = process.env.PORT || 6001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
