var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://localhost/sandbox";

// подключаемся к базе данных
mongoClient.connect(url, function(err, db) {
    // получаем коллекцию humans
    var humans = db.collections("humans");
    // совершаем запрос insert
    humans.insert({
        name: "Алексей",
        age: 18
    }, function(err, result) {
        // функйция обратного вызова
        console.log(result);
    });
});
