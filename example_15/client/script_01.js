$("#request").on("click", function() {
    var request = $.get("http://localhost:591/");
    /* обработчик успешного завершения */
    request.done(function(data){
        console.log(data);
    });
    /* обработчик возникшей ошибки */
    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
    });
});
