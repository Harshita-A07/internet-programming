<!DOCTYPE html>
<html >
<head>
  <style>
   h2{
      color:red;
      text-align:center;
    }
    </style>
</head>
<body>
<h2 id="h3">Adding dashes between two even numbers</h2>
<label for="inputNumber">Enter a number:</label>
<input type="text" id="inputNumber" placeholder="Enter number">
<br> <br>
<center>
<button onclick="insertDashes()">Insert Dashes</button>
</center>
<p id="output">Result: </p>
<script>
    function insertDashes() {
        var input = document.getElementById('input').value;
        var output = Dashes(input);
        document.getElementById('output').innerText = 'Result: '+ output;
    }
    function Dashes(input) {
        var result= '';
        for (var i = 0; i < input.length; i++) {
            var currentDigit = parseInt(input[i]);
            var nextDigit = parseInt(input[i + 1]);
            result += currentDigit;
            if (Even(currentDigit) && Even(nextDigit)) {
                result+='-';
            } }
        return result;
    }
    function Even(num) {
        return num % 2 === 0;
    }
</script>
</body>
</html>
