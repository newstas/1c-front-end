var mongoClient = require("mongodb").MongoClient,
    url = "mongodb://127.0.0.1:27017/sandbox";

// подключаемся к базе данныч
mongoClient.connect(url, function(err, db) {
    //if(err) console.log(err.stack); // получаем коллекцию humans
    var humans = db.collection("humans");
    // совершаем запрос insert
    humans.insert({
        name: "Алексей",
        age: 18
    }, function(err, result) {
        //if(err) console.log(err.stack); // функйция обратного вызова
        console.log(result);
    });
});
