const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const db = require("./db/connection.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(5004, () => {
	console.log("Server started on port 5004");
});
