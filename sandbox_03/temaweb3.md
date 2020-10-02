# Web 3 — CSS. Выравнивания и эффекты

`CSS` модуль раскладки `Flexible Box`, обычно называемый флексбокс или `flexbox` или просто `flex` (флекс), был разработан как модель одномерного-направленного макета и как один из методов распределения пространства между элементами в интерфейсе, с мощными возможностями выравнивания. 

`Flexbox` разметка в `CSS` даёт один из наиболее эффективных способов расстановки, выравнивания и распределения места между элементами внутри контейнера, даже если их размер неизвестен или динамичен (собственно, по этому его и называют `flex`, от слова `flexible`, что по-английски имеет двойственное значение — гибкий и уступчивый, что очень сочетается с моделью поведения `flexbox`).

`Flexbox` по праву можно назвать удачной попыткой решения огромного спектра проблем при построении лейаутов в `css`.

### Немного истории

- 2008 – CSS Working Group обсуждает предложение “Flexible Box Model” на основе XUL (XML User Interface Language – язык разметки в приложениях Mozilla) and XAML (Extensible Application Markup Language – язык разметки в приложениях Microsoft). 
- 2014 – все новые браузеры поддерживают последнюю спецификацию (включая IE 11)

## Flex контейнер

Область документа, использующая `flexbox`, называется `flex контейнером`. Чтобы создать `flex контейнер`, мы задаем значение `flex` или `inline-flex` для свойства `display` контейнера. Как только мы делаем это, прямые потомки этого контейнера становятся flex элементами.

```css
.container {
  display: flex; /* or inline-flex */
}
```

### Flexbox определяет набор CSS свойств для контейнера

`Flexbox` определяет набор `CSS` свойств для контейнера (`flex-контейнер`) и его дочерних элементов (Flex-блоков). Первое, что нужно сделать – это указать контейнеру `display: flex` или `display: inline-flex`.

## Flexbox: две оси

При работе с flexbox нужно мыслить с точки зрения двух осей – главной оси и побочной оси. Главная ось определяется свойством `flex-direction`, а побочная ось проходит перпендикулярно ей. Все, что мы делаем с `flexbox`, относится к этим осям, поэтому стоит с самого начала понять, как они работают.

## Главная ось

### flex-direction – направление главной оси

Главная ось определяется свойством flex-direction, которая может принимать одно из следующих значений:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Доступные значения flex-direction:

- `row` (значение по умолчанию) : слева направо (в rtl справа налево)
- `row-reverse`: справа налево (в rtl слева направо)
- `column`: сверху вниз
- `column-reverse`: снизу вверх

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

Если вы выберете `row` или `row-reverse`, ваша главная ось будет проходить в горизонтальном направлении (`inline direction`).

[![Basics1.png](https://i.postimg.cc/25x97qmd/Basics1.png)](https://postimg.cc/2qVxzS13)

Если вы выберете `column` или `column-reverse`, ваша главная ось будет проходить в вертикальном направлении (`block direction`).

[![Basics2.png](https://i.postimg.cc/mr4693x2/Basics2.png)](https://postimg.cc/w1WV8mTS)

### Поперечная ось

Поперечная (побочная)  ось проходит перпендикулярно главной оси, поэтому, если свойство `flex-direction` (главная ось) задано как `row` или `row-reverse`, побочная ось будет проходить в вертикальном направлении.

[![Basics3.png](https://i.postimg.cc/9QZnz8nn/Basics3.png)](https://postimg.cc/w1xVGVHX)

Если свойство `flex-direction` задано как `column` или `column-reverse`, побочная ось будет проходить в горизонтальном направлении.

[![Basics4.png](https://i.postimg.cc/7YpRH8mz/Basics4.png)](https://postimg.cc/JG5xxgw7)

Понимание того, с какой осью вы работаете (главная или побочная) очень важно для дальнейшего изучения Flexbox.


### `justify-content` – выравнивание по главной оси (обосновать содержание).

`CSS` свойство `justify-content` определяет то, как будут выровнены элементы вдоль главной оси.

Доступные значения `justify-content`:

- `flex-start` (значение по умолчанию) : блоки прижаты к началу главной оси
- `flex-end`: блоки прижаты к концу главной оси
- `center`: блоки располагаются в центре главной оси
- `space-between`: первый блок располагается в начале главной оси, последний блок – в конце, все остальные блоки равномерно распределены в оставшемся пространстве.
- `space-around`: все блоки равномерно распределены вдоль главной оси, разделяя все свободное пространство поровну.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}
```

[![flex-justify-content-300x200.png](https://i.postimg.cc/wjWMn267/flex-justify-content-300x200.png)](https://postimg.cc/dhyJy8ZY)

### `align-items` – выравнивание по поперечной оси (выровнять элементы)

Свойство `align-items` предназначено для выравнивания элементов внутри строки.
`CSS` свойство `align-items` определяет то, как будут выровнены элементы вдоль поперечной оси.

Доступные значения `align-items`:

- `flex-start`: блоки прижаты к началу поперечной оси
- `flex-end`: блоки прижаты к концу поперечной оси
- `center`: блоки располагаются в центре поперечной оси
- `baseline`: блоки выровнены по их baseline
- `stretch` (значение по умолчанию) : блоки растянуты, занимая все доступное место по поперечной оси, при этом все же учитываются `min-width`/`max-width`, если таковые заданы.

[![flex-align-items-300x300.png](https://i.postimg.cc/qvY085JX/flex-align-items-300x300.png)](https://postimg.cc/68dDKzGy)

## Многострочная организация блоков внутри `flex-контейнера`

### `flex-wrap` (гибкая обертка)

Все примеры, которые мы приводили выше, были построены с учетом однострочного (одностолбцового) расположения блоков. Надо сказать, что по умолчанию `flex-контейнер` всегда будет располагать блоки внутри себя в одну линию. Однако, спецификацией также поддерживается многострочный режим. За многострочность внутри `flex-контейнера` отвечает `CSS` свойство `flex-wrap`.

Доступные значения `flex-wrap`:

- `nowrap` (значение по умолчанию) : блоки расположены в одну линию слева направо 
- `wrap`: блоки расположены в несколько горизонтальных рядов (если не помещаются в один ряд). Они следуют друг за другом слева направо 
- `wrap-reverse`: то-же что и wrap, но блоки располагаются в обратном порядке.

[![1-jsf-Nw-RZNj-Gigk-Yle-G2q7-TQ.jpg](https://i.postimg.cc/MpxxtQVX/1-jsf-Nw-RZNj-Gigk-Yle-G2q7-TQ.jpg)](https://postimg.cc/Lnyr8hyM)

### `flex-flow` – удобное сокращение для `flex-direction` + `flex-wrap` (гибкий поток)

По сути, `flex-flow` предоставляет возможность в одном свойстве описать направление главной и многострочность поперечной оси. По умолчанию `flex-flow: row nowrap`.

`flex-flow: <‘flex-direction’> || <‘flex-wrap’>`

### `align-content` (выровнять контент)

Существует также свойство `align-content`, которое определяет то, каким образом образовавшиеся ряды блоков будут выровнены по вертикали и как они поделят между собой все пространство `flex-контейнера`.

Важно: `align-content` работает только в многострочном режиме (т.е. в случае `flex-wrap: wrap;` или `flex-wrap: wrap-reverse;`)

Доступные значения `align-content`:

- `flex-start`: ряды блоков прижаты к началу `flex-контейнера`
- `flex-end`: ряды блоков прижаты к концу `flex-контейнера`
- `center`: ряды блоков находятся в центре `flex-контейнера`
- `space-between`: первый ряд блоков располагается в начале f`lex-контейнера`, последний ряд блоков блок – в конце, все остальные ряды равномерно распределены в оставшемся пространстве.
- `space-around`: ряды блоков равномерно распределены в от начала до конца `flex-контейнера`, разделяя все свободное пространство поровну.
- `stretch` (значение по умолчанию): Ряды блоков растянуты, дабы занять все имеющееся пространство.

[![flex-align-content-e1390778353494.png](https://i.postimg.cc/QCY9cZfk/flex-align-content-e1390778353494.png)](https://postimg.cc/jnNSrm0L)


***
Ресурсы:

[Что такое Flexbox?](https://html5.by/blog/flexbox/) 

[Основные понятия Flexbox](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)