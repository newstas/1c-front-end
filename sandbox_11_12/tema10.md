field |fiːld| - [поле](https://wooordhunt.ru/word/field)

cell |sel| - [ячейка](https://wooordhunt.ru/word/cell)

taɪl |taɪl| - плитка [косточка](https://wooordhunt.ru/word/tile)

offset |ˈɔːfset| - смещённый, [выравнивать](https://wooordhunt.ru/word/offset)

length |leŋθ| - [длина](https://wooordhunt.ru/word/length)

between |bɪˈtwiːn| - [между](https://wooordhunt.ru/word/between)


## createElement()

document.createElement(tag) - создаёт новый элемент с заданным тегом:

```js
cell.classList.add("field__cell", "field__cell--null");
```

Метод `createElement` позволяет **создать новый элемент, передав в параметре имя 
тега**. После создания с элементом можно работать как с обычным элементом, 
а также его можно добавить на страницу методами `prepend`, `append`, `appendChild`, 
`insertBefore` или `insertAdjacentElement`.


## appendChild()

Метод `appendChild()`  добавляет узел в конец списка дочерних элементов указанного 
родительского узла. Если данный дочерний элемент является ссылкой на существующий 
узел в документе, то функция `appendChild()` перемещает его из текущей позиции в новую 
позицию (нет необходимости удалять узел из родительского узла перед добавлением 
его к какому-либо другому узлу). 

```js
field.appendChild(cell);
```

Чаще всего используется после создания элемента с помощью `createElement()`.


## classList

`classList.add` - метод add объекта classList позволяет добавлять CSS классы элементу - 
`элемент.classList.add(класс);`

```js
cell.classList.add("field__cell", "field__cell--null");
```

ClassList является геттером. Возвращаемый им объект имеет несколько методов:

- `add()` - добавляет элементу указанные классы
- `remove()` - удаляет у элемента указанные классы
- `toggle()` - если класс у элемента отсутствует - добавляет, иначе - убирает. 
Когда вторым параметром передано `false` - удаляет указанный класс, а если 
`true` - добавляет.


## getElementById(id)

Если у элемента есть **атрибут** `id`, то мы можем получить его вызовом 
`document.`, где бы он ни находился.

```js
var field = document.getElementById("field");
```

*Примечание: вместо метода `getElementById()` можно использовать метод 
`querySelector()`, позволяющий проводить поиск элемента используя любой 
допустимый **CSS селектор**.*


## innerHTML: содержимое элемента

Свойство `innerHTML` позволяет **получить HTML-содержимое элемента в виде 
строки** `var contents = elem.innerHTML`

```js
cell.innerHTML = n;
```

Мы также можем изменять его. Это один из самых мощных способов менять 
содержимое на странице `elem.innerHTML = "<p>test!</p>"`


## push()

Метод `push()` добавляет один или более элементов в конец массива и 
возвращает новую длину массива.

```js
tiles.push(cell);
```

Чтобы добавить элементы в начало массива, используйте метод `unshift()`
