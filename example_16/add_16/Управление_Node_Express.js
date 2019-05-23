
-------------- Node уставновка сервера Express

// Инициализация конфигурационного файла package.json
// package.json хранит список зависимостей

    npm init --force

// Создание сервреа
// Устанавливаем модуль Express
// Создается папка node_modules

    npm install express --save

// Если удалить папка node_modules, то восстановить можно командлетом

    npm install

// Удалеям любой модуль

    npm uninstall package --save

// Устанвливаем молудь CORS

    npm install cors --save

// Установка модуля WebSocket

    npm install ws --save

// Установка модуля mongodb для связи Node.js с базами данных MongoDB

    npm install mongodb --save

// Устанвливаем нужную версию MongoDB !!!

    npm install mongodb@2.2.33 --save

// Запустить сервер и код в файле:

    node index.js
