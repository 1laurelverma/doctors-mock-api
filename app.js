const express = require("express");
const Doctors = require("./MOCK_DATA.json");
var cors = require("cors");
const app = express();
const dotenv = require("dotenv");
app.use(cors());
dotenv.config();

const hardcodedPort = 7000;
const Port = process.env.PORT;

// console.log(Port);
// Routes
app.get("/api/doctors", (req, res) => {
  return res.json(Doctors);
});

app.get("/api/doctors/:city", (req, res) => {
  const city = req.params.city;
  // console.log("city : ", city);
  let doctorByCity = Doctors.filter((doctor) => doctor.city.toLowerCase() === city);
  // console.log("doctorByCity", doctorByCity);
  return res.json(doctorByCity);
});

app.listen(Port, () => console.log(`Backend is Runing at ${Port}`));
