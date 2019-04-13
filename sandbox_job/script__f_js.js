var input = document.getElementById("field");
var x = input.value;



var shipping;

x = Number(input.value);

shipping = x + 1;

var el;

el = shipping;

document.getElementById("find").value = shipping; 


/* нашел пример в интернете, не работает с простыми тегами!
<input id="textfield">
<script>
document.getElementById("textfield").value= Math.max(3+3, 4+4);
</script> */