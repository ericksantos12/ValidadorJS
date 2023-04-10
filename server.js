const express = require("express")
const router = require("./routes.js")
const dotenv = require("dotenv").config({path: ".env"});

const app = express();

// app.use(router)

app.set('port', process.env.port || 7777);

const server = app.listen(app.get('port'), function (err) {
    if (err) console.log(err);
    console.log(`Server listening at ${server.address().port}`);
})
