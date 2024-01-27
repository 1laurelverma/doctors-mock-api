const express = require("express");
const Doctors = require("./MOCK_DATA.json");
const app = express();
const port = 8000;

// Routes
app.get("/api/doctors", (req, res) => {
  return res.json(Doctors);
});

app.get("/api/doctors/:city", (req, res) => {
  const city = req.params.city;
  console.log("city : ", city);
  let doctorByCity = Doctors.filter((doctor) => doctor.city.toLowerCase() === city);
  console.log("doctorByCity", doctorByCity);
  return res.json(doctorByCity);
});

app.listen(port, () => console.log("Backend is Runnig at 8000"));
