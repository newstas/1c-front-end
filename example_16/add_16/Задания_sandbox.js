db.humans.insert({ name: "John", age: 30 })

db.humans.insert({ name: "Mary", age: 23 })

var documents = db.humans.find();
documents.pretty()

db.humans.insertMany([
    {
        name: "john",
        age: 25
    },
    {
        name: "Анна",
        age: 27
    }
])

// Удаление данных

db.humans.remove({ name: "john"})

// Запросы

db.sandbox.find()

db.humans.find()

db.humans.find().pretty()

show collections

db.humans.find({ name: "John"})

db.humans.find({ age: {$lt: 26} })
