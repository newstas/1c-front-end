var tiles = [];
var freeCell = {
    y: 3,
    x: 3
};
/* для избежания проверки на собранность
 во время перемешивания */
var shuffled = false;

function createCellNull() {  // возвращает новый элемент div  склассами field__cell и field__cell--null
    var cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--null");
    return cell;
}

function setCellOffset(cell) {  // устанавливает положение переданного ей элемента при помощи стилевых свойств left и top (offset = 15px - расстян. между ячейками)
    /* + "px" необходимо, так как это значение своиства CSS */
    cell.style.left = (15 + (15 + 81.25) * cell.x) + "px";
    cell.style.top = (15 + (15 + 81.25) * cell.y) + "px";
}

function appendCell(cell) {  // добавляет переданный ей элемент к игровому полю
    var field = document.getElementById("field");
    field.appendChild(cell);
}

function createField() {  // создаем игровое поле с ячейками
    var x, y, cell;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            cell = createCellNull();
            cell.y = y;  // номер строки ячейки при нумерации с нуля
            cell.x = x;  // номер столбца ячейки при нумерации с нуля
            setCellOffset(cell);
            appendCell(cell);
        }
    }
}

function createCellTile() {  // возвращает новый элемент div  склассами field__cell и field__cell--null, аналогично как в функции createCellNull
    var cell = document.createElement("div");
    cell.classList.add("field__cell", "field__cell--tile");
    return cell;
}

function createTiles() {  //  создаем игровые костяшки, аналогично функции createField и добавляем в глобальный массив tiles
    var x, y, cell, n;
    for (y = 0; y < 4; ++y) {
        for (x = 0; x < 4; ++x) {
            n = y * 4 + x + 1;  // с помощью этой формулы получаем число на костящке
            /* всего костяшек должно быть 15 */
            if (n < 16) {
                cell = createCellTile();
                cell.y = y;  // номер строки костяшки при нумерации с нуля
                cell.x = x;  // номер столбца костяшки при нумерации с нуля
                cell.innerHTML = n;
                setCellOffset(cell);
                appendCell(cell);
                /* добавляет костяшку в массив */
                tiles.push(cell);
            }
        }
    }
}

function between(a, b, t) { // принимает аргументы a, b  и t. Возвращает true, если t находится между a и b, а иначе false
    return a <= t && t <= b || b <= t && t <= a;
}

function checkVictory() {  // функция добаляет класс modal--visible к элементу modal, если головоломка собрана, и добаляется в конце tileClick
    var i, n;
    for (i = 0; i < tiles.length; ++i) {
        n = tiles[i].y * 4 + tiles[i].x + 1;
        /* нестрогое сравнение, так как innerHTML -- строка */
        if (tiles[i].innerHTML != n) return;
    }
    document.getElementById("modal").classList.add("modal--visible");
}

function tileClick(event) {  // функция обратного вызова tileClick, исопльзуящая between и т. д. и принимающая аргумент event
    var bar = event.target,  // нажатая игровая ячейка (event.target), которая сохраняется в переменную bar ниже
        i, tile;
    /* запоминаем старые координаты каждой ячейки */
    var oldX = bar.x,
        oldY = bar.y;
    if (bar.y == freeCell.y) {
        for (i = 0; i < tiles.length; ++i) {
            tile = tiles[i];
            if (tile.y == bar.y && between(bar.x, freeCell.x, tile.x)) {
                if (bar.x < freeCell.x) tile.x += 1;
                else tile.x -= 1;
                setCellOffset(tile);
            }
        }
        freeCell = {  // создаем глобальный объект freeCell со свойствами y и x, обозначающие позицию свободной ячейки
            y: oldY,
            x: oldX
        };
    } else if (bar.x == freeCell.x) {
        for (i = 0; i < tiles.length; ++i) {
            tile = tiles[i];
            if (tile.x == bar.x && between(bar.y, freeCell.y, tile.y)) {
                if (bar.y < freeCell.y) tile.y += 1;
                else tile.y -= 1;
                setCellOffset(tile);
            }
        }
        freeCell = {
            y: oldY,
            x: oldX
        };
    }
    /* если перемешание закончилось,
     проверяем, собрана ли головоломка */
    if (shuffled) {
        checkVictory();
    }
}

function animateTiles() {  // добавляет пустой обработчик событий click c именем tileClick ко всем элементам массива tiles
    var i;
    for (i = 0; i < tiles.length; ++i) {
        tiles[i].addEventListener("click", tileClick);
    }
}

function shuffleTiles() {  // функция перемешивания костяшек, выбирает случайный элемент из массива tiles
    var i, index;
    for (i = 0; i < 1000; ++i) {
        index = Math.floor(Math.random() * tiles.length); /* функция Math.random генерирует случайное число в промежутке 0-1, потом умножается на x и с пмощью Math.floor приводится к целгому числу */
        tiles[index].click();  // эмуляция нажатия
    }
    shuffled = true;
}

createField();
createTiles();
animateTiles();
shuffleTiles();
