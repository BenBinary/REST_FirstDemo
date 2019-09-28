const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");

const app = express();

app.use('/feed', feedRoutes);

//Dies ist für Formular Daten
//app.use(bodyParser.urlencoded());

app.listen(8080);