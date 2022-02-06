var duck = {
    name: "Дональд",
    weight: 10,
    quack: function () {
        console.log("Кря!");
    },
    siblings: ["Делла"]
};


var square = document.createElement("div");
container.appendChild(square);





var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i);
}


var i = 1;
while (i < 3) {
    console.log(i);
    i = i + 1;
}





var i = 0;
while (i < 3) {
    console.log(i);
    i = i + 1;
}


var i = 0;
while (i < 3) {
    i = i + 1;
    console.log(i);
}




function truthy() {
    console.log("Я истина!");
    return true;
}

function falsy() {
    console.log("Я ложна!");
    return false;
}

if (truthy() || falsy()) {
    console.log("Условие верно!");
}




function min(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

var i;
for (i = 0; i < 3; i = i + 1) {
    console.log(i);
}

