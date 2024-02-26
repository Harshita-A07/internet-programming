
<h2>Sorting array using book id</h2>
<p id="h"></p>
<p id="demo2"></p>
<script>
const book_id = [40, 100, 1, 5, 25, 10];
document.getElementById("h").innerHTML=book_id; 
book_id.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML =book_id;
</script>
