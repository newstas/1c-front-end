var button = document.getElementById("request");
button.addEventListener("click", function() {
    /* создаем объект запроса */
    var xhr = new XMLHttpRequest();
    /* конфигурируем запрос */
    xhr.onreadystatechange = function() {
        /* если запрос в состоянии  DONE */
        if(this.readyState == this.DONE) {
            /* если сервер выдает ошибку */
            if(this.status != 200) {
                console.log("Ошибка: " + this.status);
            } else {
                console.log(this.responseText);
            }
        }
    };
    /* посылаем запрос */
    xhr.send();
});
