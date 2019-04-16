// Запросы для добавление в консоль
// Добавляем документы в коллекцию
db.humans.insert({ name: "John", age: 30 })
//
db.humans.insert({ name: "Mary", age: 23 })

// Запрос выводящий все домкументов
var documents = db.humans.find();
documents.pretty()
