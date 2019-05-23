--------- тема 20 Vue.js. Компоненты и маршрутизация ----------

    Set-Location F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_3

    cd F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_3

    cd F:\Stanislav\Workspace\GitHub\1c-front-end\example_20\server

    http:localhost/        http:localhost/:80/

---------- Начало. Установка ----------

// 1) Создаем конфигурационнй фалй packede.json в папке проекта

    npm init --force

// 2) Устанавливаем модуль Express

    npm install express --save

// Установка модуля mongodb для связи Node.js с базами данных MongoDB

    npm install mongodb --save

// Устанвливаем нужную версию MongoDB

    npm install mongodb@2.2.33 --save

// 3) Устанавливаем библиотеку vue-jwt-mongoдля для нач. загрузки JSON Web Token
// с использованием Vue.js , MongoDB и Express.js .

    npm install vue-jwt-mongo --save

// Устанавливаем модуль vue-resource для отправки http-запросов

    npm install vue-resource --save

// Запускаем сервер: из папки server выполнить

    node index.js



---------- Начало. Установка Vue и компонентов ----------

// 1) Установка Browserify

    npm install --global browserify

// 2) Создаем конфигурационнй фалй в папке проекта

    npm init --force


// 3) Утстанвливаем JQuery

    npm install jquery --save

// Компилируем main.js и JQuery  в файл bundle.js

    browserify main.js --outfile bundle.js

// 4) Устанавливаем Watchify для автоматической сборки

    npm install --global watchify

    watchify main.js --outfile bundle.js --verbose

// 5)Утстанвливаем Vue.js и модули необходимы для сборки компонентов

    npm install vue --save

    npm install vueify vue-hot-reload-api `
        babel-core babel-preset-es2015 `
        babel-runtime babel-plugin-transform-runtime `
        --save-dev

// Переход`

// Компилируем код в bundle.js с vueify

    browserify main.js --outfile bundle.js --transform vueify


// 6) Устанавливаем маршрутизатор

    npm install vue-router --save





-------- Подробго --------------

// Проверяем версии Node и npm

    node --version

    npm --version

// Установка Browserify

    npm install --global browserify

// Проверим устаеновку browserify

    browserify --version


// Создаем конфигурационнй фалй в папке проекта

    npm init --force


// Утстанвливаем JQuery

    npm install jquery --save

// Провераяем версию JQuery

    npm -v jquery


// Компилируем main.js и JQuery  в файл bundle.js


    browserify main.js --outfile bundle.js


------------------- Автоматическая сборка ------------------

// Устанавливаем Watchify с помощью NPM
// Watchify это стандартный инструмент для автоматической пересборки вашего bundle.js

    npm install --global watchify

// Автомагтическая сборка в момент сохраниния при помощи пакета Watchify
// Флаг -v приказывает Watchify уведомлять вас о каждой пересборке проекта.

watchify main.js --outfile bundle.js --verbose


----------- компоненты -----------------

// Утстанвливаем Vue.js

    npm install vue --save

// Провераяем версию Vue.js

    npm -v vue

// Компилируем код в bundle.js с vueify

    browserify main.js --outfile bundle.js --transform vueify


---------- Маршрутизация ----------

// Устанавливаем маршрутизатор

    npm install vue-router --save






    npm uninstall babel-preset-es2015 --save-dev


------ алтернативные варианты ------------



var Vue = require('vue').default;

или же

import Vue from 'vue';



/ import Vue from 'vue'
import Vue from 'vue/dist/vue.js'
import App from './src/app.vue'

import Vue from 'vue';
import App from './app.vue/';


var Vue = require('vue').default;


В моем случае я использую browserify, где вы можете использовать псевдоним для создания псевдонима. Добавьте следующее в ваш package.jsonфайл:

{
  // ...
  "browser": {
    "vue": "vue/dist/vue.common.js"
  }
}


browserify main.js --outfile bundle.js --transform vueify
Error: Cannot find module '../movie.vue' from 'F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_2\pages'
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:55:21
    at load (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:69:43)
    at onex (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:92:31)
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:22:47
    at FSReqWrap.oncomplete (fs.js:153:21)
PS F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_2>

Error: Cannot find module './app.vue' from 'F:\Stanislav\Workspace\GitHub\1c-front-end\example_19_3'
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:55:21
    at load (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:69:43)
    at onex (C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:92:31)
    at C:\Users\Stanislav\AppData\Roaming\npm\node_modules\browserify\node_modules\browser-resolve\node_modules\resolve\lib\async.js:22:47
    at FSReqWrap.oncomplete (fs.js:153:21)



new Vue({
    el: '#app',
    template: '<p>haaaa</p>'
});


import Vue from 'vue' //import App from './app.vue'

new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(
            'p',
            'haaaa'
        )
    }
});



import Vue from 'vue'
import Vue from './header.vue"'

var Vue = require("vue");
var Header = require("./header.vue");

var vm = new Vue({
    el: "body",
    components: {
        cTag: Header
    }
});
