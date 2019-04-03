// index.js
var express = require("express"),
    cors = require("cors");
var app = express();

app.use(cors());

app.get("/", function(request, response) {
	response.send("Hello? Node.js!");
});

app.listen(591);
