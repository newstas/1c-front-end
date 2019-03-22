var field = document.getElementById('field');

function isPime(n) {
    for(var i = 2; i < n; ++i) {
        /* если n делится на какое-либо
          из чисел от 2 до n - 1, то оно составное */
        if(n % i ==0) {
            return false;
        }
    }
    /* если n ни на что не разделилось, то оно простое */
    return true;
}

field.addEventListener("keydown", function(event) {
    var number, i;
    /* если нажата клавиша Enter */
    if(event.which == 13) {
        /* точка останова */
        debugger;
        number = Number(field.value);
        alert(isPrime(number) ? "Простое!" : "Составное!");
    }
});
