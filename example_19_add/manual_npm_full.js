------------------- Все о NPM --------------------


------------- Установка NPM модулей ---------------

// Установка npm модулей, указанных в package.json

	npm install

// Стандартный способ установки молдуля

	npm install package --save

// Устанавливаем модуль в node_modules, но не package.json

	npm install <name>

// Устанвливаем его в dependencies в package.json

	npm install <name> --save

// также устанавливаем его в devDependencies в package.json

	npm install <name> --save-dev

// также устанавливаем его глобально

	npm -g install <name> --save


------------ Инициализация файла packede.json ------------

// Создаем конфигурационнй фалй packede.json в папке проекта

	npm init --force


-------------------- Удаление NPM ---------------------

// удаляет модуль из node_modules, но не package.json

	npm uninstall <name>

// также удаляет его из dependencies в package.json

	npm uninstall <name> --save

// также удаляет его из devDependencies в package.json

	npm uninstall <name> --save-dev

// также удаляет его глобально

	npm -g uninstall <name> --save


-------------------- Проверка NPM ---------------------

// Проверяем версиию npm

    npm --version

// покажет версию установленного пакета,

   npm list <package>

// Покажет последнюю версию пакета, которая существует.

	npm view <package> version

// Проверить пакет на устаревшие зависимости
// проверит npm реестр, чтобы узнать, устарел ли какой-либо из ваших пакетов.
// В командную строку будет выведен список: текущей версии, требуемой версии и последней версии.

	npm outdated

// Аудит пакетов npm

	npm audit

// Получите подробный аудиторский отчет в формате JSON

	npm audit --json

// Исправление пакетов (осторожно!)

	npm audit fix

// Проверить пакеты, необъявленные в package.json
// Проверит, выведет список, а затем удалит

	npm prune

// Открыть домашнюю страницу пакета

	npm home $package (сам пакет)

// Открыть GitHub репозиторий пакета

	npm repo $package (сам пакет)

----------- Глобальные библиотеки и локальные библиотеки NPM ------------

// Где установлены глобальные библиотеки.

	npm list -g

// Посмотреть не -g lobal библиотеки в node_modules в той папке, в которой вы находитесь

	npm list

// Найти глобальный установочный корень независимо от текущего рабочего каталога

	npm root -g

// Сообщит вам эффективный каталог установки ваших локальных пакетов npm

	npm root

// Путь к библиотеке в Windows 7, 8 и 10 - %USERPROFILE%\AppData\Roaming\npm\node_modules
// если не установлен NODE_PATH


-------------- Сокращения ---------------

	-f: --force
	-v: --version
	-g: --global
	-S: --save
	-D: --save-dev
