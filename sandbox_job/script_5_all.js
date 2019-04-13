var = hotel {
    name: "Тула",
    rooms: 40,
    booked: 25,
    
    checkAvailability: function() {
        return this.rooms - this.boocked;
    }
}


var square = document.createElement("div");
container.appendChild(square);





var i;
for(i = 0; i < 3; i = i + 1) {
    console.log(i);
}


var i = 1;
while(i < 3) {
    console.log(i);
    i = i + 1;
}





var i = 0;
while(i < 3) {
    console.log(i);
    i = i + 1;
}


var i = 0;
while(i < 3) {
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

if(truthy() || falsy()) {
    console.log("Условие верно!");
}

