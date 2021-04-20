const express = require("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("dist"));

app.listen(port, () => {
    console.log("Server listening on Port " + port);
});

app.post("/analyze", (req, res) => {
    console.log(req.body);
});