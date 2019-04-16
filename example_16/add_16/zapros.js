// Запросы для добавление в консоль
// Добавляем документы в коллекцию
db.humans.insert({ name: "John", age: 30 })
//
db.humans.insert({ name: "Mary", age: 23 })

// Запрос выводящий все домкументов
var documents = db.humans.find();
documents.pretty()

// Добавляем еще несколько документов в нашу коллекцию
db.humans.insertMany([
    {
        name: "John",
        age: 25
    },
    {
        name: "Анна",
        age: 27
    }
])

// Выбираем документы, у которых поле name имеет значение "John"
db.humans.find({ name: "John" })
