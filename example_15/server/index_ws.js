    // Протокол WebSocket
var wss = require ("ws").Server;

/* создаем новый WebSocket-сервер */
var server = new wss({ port: 591 });
/* создаем множество подключенных клинетов */
var clients = new Set();

/* обработчик нового соединения */
server.on("connection", function(socket) {
    /* добавляем клиента к множеству */
    clients.add(socket);

    /* обработчки входящего сообщения */
    socket.on("message", function(message) {
        /* для каждого клиента из множества */
        for(var interlocutor of clients) {
            /* пересылаем сообщение */
            interlocutor.send(message);
        }
    });

    /* обработчик закрытия соединения */
    socket.on("clouse", function() {
        /* удаляем клиента из множества */
        clients.delete(socket);
    });
});
