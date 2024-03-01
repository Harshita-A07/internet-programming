<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting Alphabetically</title>
    <script>
        function sortString(inputString) {
          and then join it back into a string
            return inputString.split('').sort().join('');
        }

        
        function button() {
            var inputString = document.getElementById('inputString').value;
            var result = sortString(inputString);
            document.getElementById('result').textContent = result;
        }
    </script>
</head>
<body>
    <h1>Alphabetical Order</h1>
    <label for="inputString">Enter a string:</label>
    <input type="text" id="inputString">
    <button onclick="button()">Sort Alphabetically</button>
    <p>Result: <span id="result"></span></p>
</body>
</html>
