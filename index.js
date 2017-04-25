var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.get("/", function(req, res) {
    res.render("index");
});

app.use("/diseases", require("./controllers/diseases"));
app.use("/symptoms", require("./controllers/symptoms"));

app.listen(3000);
