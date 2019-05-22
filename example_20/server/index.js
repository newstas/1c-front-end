var express = require("express"),
    vjm = require("vue-jwt-mongo"),
    multer = require("multer"),
    mongoClient = require("mongodb").MongoClient;

var mongoUrl = "mongodb://localhost/photofeed";

var app = express();
var vjmSever = vjmServer({
    mongoUrl: mongoUrl,
    jwtSecret: "I7AF3D8B14E1D03CDE8BDA2E735685B4BB385A54995261694D2520DB962E7F631
"
});
var upload = multer({ dest: "../public/uploads" });
var database;

app.use(express.static("../client"));
app.use(express.static("../pablic"));

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);

app.post("upload", [vjmSever.jmtProtector, upload.single("image")],
    function(request, response) {
        database.collection("uploads").insert({
            user: request.user.username,
            image: request.file.filename,
            data: new Data()
        });
        response.sendStatus(200);
    }
);

app.get("/feed", vjmSever.jwtProtector, function(request, response) {
    database.collection("uploads").find()
    .sort({ date: -1 })
    .limit(10)
    .toArray(function(err, documents) {
        response.json(documents);
    });
});

mongoClient.connect(mongoUrl, function(err, db) {
    database = db;
    app.listen(80);
});
