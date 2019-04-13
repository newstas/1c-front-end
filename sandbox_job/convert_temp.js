var $ = function (id) { return document.getElementById(id); }

    function update() {
            if ($("to_celcius").checked = true) {
            document.getElementById("cdegrees").disabled = true;
            document.getElementById("cdegrees").value = ''
            }
            else ($("to_fahrenheit").checked == true) {
             document.getElementById("fdegrees").disabled = true;
             document.getElementById("fdegrees").value = ''
            }

    function convert () {
     function convertToC() {
            var fTempVal = parseFloat(document.getElementById('fdegrees').value);
            var cTempVal = (fTempVal - 32) * (5 / 9);
            document.getElementById('cdegrees').value = cTempVal.toFixed(2);
            return false;
        }

        function convertToF() {
            var cTempVal = parseFloat(document.getElementById('cdegrees').value);
            var fTempVal = (cTempVal * (9 / 5)) + 32;
            document.getElementById('fdegrees').value = fTempVal.toFixed(2);
            return false;
        }
    }

window.onload = function () { 
    $("conversion_type").onclick = calculate_click;}