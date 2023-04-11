const express = require("express")
const router = require("./routes.js")
const dotenv = require("dotenv").config();

const app = express();

app.use(router)

app.set('port', process.env.port || 7777);

const server = app.listen(app.get('port'), function (err) {
    if (err) console.log(err);
    console.log(`Server listening at http://localhost:${server.address().port}`);
})
