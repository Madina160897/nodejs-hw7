const express = require("express");
const router = express.Router();
const fs = require("fs")

router.get("/", (req, res) => {
    console.log("cars router");
    res.send(fs.readFileSync("./routers/cars.json", { encoding: "utf-8" }));
});

router.post("/", (req, res) => {
    const carsArray = JSON.parse(fs.readFileSync("./routers/cars.json", { encoding: "utf-8" }));
    fs.writeFileSync("./routers/cars.json", JSON.stringify([...carsArray, { id: carsArray.length + 1, model: req.body.model, year: req.body.year, img_src: req.body.img_src}]));
    res.send("cars added");
});

module.exports = router;