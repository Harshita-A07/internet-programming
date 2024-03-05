<!DOCTYPE html>
<html>
<head>
<style>
h2{
  text-align:center;
  color:red;
  padding:30px; }
   #image {
        width: 200px;
        transition: transform 0.3s ease-in-out;
        align-content:center; }
    #image:hover {
        transform: scale(1.1);
    }
</style>
</head>
<body style="background-color:lightgrey">
<h2>-- Mouseover the image--</h2>
<img id="image" src="org.jpg" alt="TS.jpg" width="670" height="250" onmouseover="changeImage()" onmouseout="restoreImage()">
<script>
function changeImage() {
    document.getElementById("image").src = "rept.jpg";
}
function restoreImage() {
    document.getElementById("image").src = "TS.jpg";  
}
</script>
</body>
</html>
