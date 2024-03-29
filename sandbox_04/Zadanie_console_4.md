# 4.3.1 ПЕРЕМЕННЫЕ

## Арефметические действия с переменными

```js
var a, b, c;
a = 3;
b = 0.5;
c = 2 * ( a / 2 + b )- 0.2;
```

*Ответ*: `3.8`


## Складываем строки

```js
var firstName = "Jone", lastName = "Doe";
fullName = firstName + " " + lastName;
```

*Ответ*: `"Jone Doe"`


# 4.3.2 DOM - ОБЪЕКТНАЯ МОДЕЛЬ ДОКУМЕНТА

## Сохраняем в переменную значение по `id`

Задаем для кнопки ковертора (Файл 4.2) атрибут `id` в значение `convert` и сохраняем 
в переменную `node` и вызываем эту переменную

```js
var node = document.getElementById("convert");
node
```

*Ответ*: `<button id="convert">в 'F!</button>`


## Свойство innerHTML

Теперь работаем со своийством элемента как с обычной переменной, записываем 
через точку после имени переменной (меняем наименовавине кнопки на Convert)  

Свойство innerHTML устанавливает или получает всю разметку и содержание 
внутри данного элемента.

```js 
var node = document.getElementById("convert");
var name = node.id;
node.innerHTML = "Convert";
```

*Ответ*: `Convert`


# 4.3.3 ФУКЦИИ

## Функция с ключевым словом `return`

```js
// функция с ключевым словом return - возвращает значение
function f(x) {
return x * x;
}

// Вызовем нашу функцию с агрументом 5, а возвращает значение присвоенное переменной
var result = f(5); 

// Смотрим значение переменной 
result;
```

*Ответ*: `25`


## Функции с несколькими аргументами

```js
// функции могут иметь несколько аргументов
function average(x, y, z) {
var sum = x +y +z;
return sum / 3
}

// Вызываем фукцию с агруметами 8,3,4
average(8, 3, 4);
```

*Ответ*: `5 `


## Строки - аргументы

```js
// Аргументом в функции могут быть не только числа, но и строки
function wrap(text, bounds) {
return bounds + text +bounds;
}

// Вызываем фукцию со страками "о", "кол"
wrap("о", "кол")
```

*Ответ*: `"колокол"`


# 4.3.4 СОБЫТИЯ

```js
// Выводим в консоль браузера общее число нажатий на кнопку - к файлу index_451.html
var button = document.getElementById("convert"); 
var count = 0;

function print() {
    count = count + 1;
    console.log("Колличество нажатий кнопки: " + count);
}

// выводим ответ при помощи обработчика события - функция print вызывается при событии "click"
button.addEventListener("click", print); 
```


# 4.5.1 КОНВЕРТОР ТЕМПЕРАТУР: ФУКЦИОНАЛЬНОСТЬ

## 4.5.1.1 Строки и числа

```js
// Берем число из текстового поля "field" и добавляем к нему число - файл index_451.html - строки и числа,
var input = document.getElementById("field");
var x = input.value; 
x + 1; 
```

"31" // ответ, где своийто value является строкой, поэтому при сложении стрики и числа "3" + 1, для исправления нужно воспользоваться функцией Nunber


```js
// Исправляем строку на число. Используем фукцию Number, которая принимает строку и возвращает число - продолжение к файлу index_451.html - строки и числа, 
var input = document.getElementById("field");
var x = input.value;
x = Number(input.value);
x + 1;
```

```js
// Конвертор температур: формула перевода Цельсия в Фаренгейты 
var c, f;
c = 10
f =( 9 / 5 * c) + 32;
```


```js
// Дает ответ в градусах Фаренгейта, c оруглением за счет toFixed(1) в панели Chrom - к файлу index_451.html

var elField = document.getElementById("field"); // Кэшируем мастоположение "field"

var x = elField.value; // Возвращает свойство (текстовое значение) value с помощью textObject .value 

x = Number(elField.value);  // Воспользуемся функцией Number - принимает строку и возвращает число

var shipping;

shipping =( 9 / 5 * x) + 32; // формула перевода градусов в фаренгейты

document.getElementById("subtotal").value = shipping.toFixed(1) // Задаем свойство (текстовое значение) value с помощью textObject. value = text, затем округляем за счет toFixed(1)
```



```js
// Готовый КОНВЕРТОР ТЕМПЕРАТУР - к файлу index_451.html
var button = document.getElementById("convert");

function print() {
    var elField = document.getElementById("field");
    var x = elField.value;
    x = Number(elField.value);
    shipping = (9 / 5 * x) + 32;

    document.getElementById("subtotal").value = shipping.toFixed(1);
}

button.addEventListener("click", print); // выводим ответ при помощи обработчика события - функция print вызывается при событии "click"
```
				 
				 









