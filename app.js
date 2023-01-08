const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const carsRouter = require("./routers/carsRouter");

app.set("view engine", "hbs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/cars", (req, res, next) => {
    console.log("Middleware");
    next();
})
app.use("/cars", carsRouter);



app.get("/page", (req, res) =>{

    const cars = JSON.parse(fs.readFileSync("./routers/cars.json"));
    res.render("cars.hbs", {
        cars
    });
})


app.listen(8080);