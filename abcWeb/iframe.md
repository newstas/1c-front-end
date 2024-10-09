# iframe — встроенная страница

Тег <iframe> позволяет встраивать контент (например, веб-страницы, видео) прямо в ваш документ HTML.

Простейший пример использования <iframe>:

`<iframe src="https://example.com" width="600" height="400"></iframe>`

Атрибут src задаёт URL-адрес страницы, которую вы хотите встроить.

Атрибуты width и height — ширина и высота фрейма (можно задавать как в пикселях, так и в процентах).

## Другие атрибуты

`sandbox`

Это важный атрибут с точки зрения безопасности. Он позволяет контролировать, какие активности разрешены внутри <iframe>.

`<iframe src="https://example.com" sandbox="allow-scripts allow-same-origin"></iframe>`

Значение allow-scripts разрешает выполнение скриптов внутри фрейма, а allow-same-origin позволяет фрейму обращаться к ресурсам его исходной страницы.


`loading`

Атрибут loading может помочь с оптимизацией производительности и отложить загрузку iframe до тех пор, пока это не будет необходимо.

`<iframe src="https://example.com" loading="lazy"></iframe>`


`allowfullscreen, allowpaymentrequest`

Здесь всё просто и следует из названия:
- `allowfullscreen`: позволяет встроенному контенту открываться в полноэкранном режиме.
- `allowpaymentrequest`: позволяет встроенному контенту делать запросы на оплату.
    

`title`

Не забывайте об универсальных атрибутах, таких как title, которые способствуют улучшению доступности.

`<iframe src="https://example.com" title="Example Content"></iframe>`

## Стилизация

`<iframe>` можно стилизовать, как и любой другой элемент. Но помните, что стили вашей родительской страницы не применяются к содержимому `<iframe>`, и вы не сможете его стилизовать через CSS в родительском документе.
```
iframe {
  border: none; 
}
```

## Отслеживание событий загрузки

Вы можете отслеживать событие load для <iframe>, чтобы знать, когда встроенный контент загружен.
```
document.querySelector('iframe').addEventListener('load', function() {
  console.log('Iframe is loaded!'); 
});
```

### Полезные ссылки

[Спецификация](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)
