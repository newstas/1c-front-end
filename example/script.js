var canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d"),
square, circle;

square = new Path2D();
square.moveTo(50, 50);
square.lineTo(250, 50);
square.lineTo(250, 250);
square.lineTo(50, 250);
square.lineTo(50, 50);

/* обводим контур */
context.stroke(square);

circle = new Path2D();
circle.arc(150, 150, 100, 0, 2 * Math.PI);

/* заливаем контур */
context.fill(circle);
