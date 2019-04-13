function solveLinearEquation(a, b) {
    if(a !== 0) {
        console.log(-b / a);
    } else {
        if(b === 0) {
            console.log("Решений бесконечно много")
        } else {
            console.log("Решений не существует!");
        }
    }
}