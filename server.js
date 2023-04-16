const express = require("express")
const router = require("./routes/routes.js")
const img_router = require("./routes/img-routes.js")
const dotenv = require("dotenv").config();

const app = express();

app.use(router);
app.use(img_router);

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/view/404.html')
})

app.set('port', process.env.port || 7777);

const server = app.listen(app.get('port'), function (err) {
    if (err) console.log(err);
    console.log(`Server listening at http://localhost:${server.address().port}`);
})
