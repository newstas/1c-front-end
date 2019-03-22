var dictionary = {key: "volue"};
reference = {key: "volue"};
dictionary == reference

console.log("The Zen of Python:\n\"Beatiful is better than ugly\'");


// 2.5 Контекст вызова
function getCaller() {
    return this;
}

var alice = { name: "Alice", fn: getCaller },
    bob = { name: "Bob", fn: getCaller };

alice.fn()
