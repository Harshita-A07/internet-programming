<!DOCTYPE html>
<html >
<head>
</head>
<body style=background-color:lightblue;>
<h2>Word Counter</h2>
<p id="s1"> SENTENCE:it is like i got the music in my mind saying it is gonna be alright.</p>
<label for="search">Enter word:</label>
<input type="text" id="search" placeholder="Enter word">
<button onclick="count()">Count</button>
<p id="result">Occurrences: 0</p>
<script>
    function count() {
        var sentence = document.getElementById('s1').innerText.toLowerCase();
        var search = document.getElementById('search').value.toLowerCase();
        var occurrences = (sentence.match(new RegExp('\\b' + search + '\\b', 'g')) || []).length;
        document.getElementById('result').innerText = 'Occurrences: ' + occurrences;}
</script>
</body>   </html>
