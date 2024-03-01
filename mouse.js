<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Change Image on Mouseover</title>
<style>
    #image {
        width: 200px;
        transition: transform 0.3s ease-in-out;
    }
    
    #image:hover {
        transform: scale(1.1);
    }
</style>
</head>
<body>

<img id="image" src="original_image.jpg" alt="Original Image" onmouseover="changeImage()" onmouseout="restoreImage()">

<script>
function changeImage() {
    document.getElementById("image").src = "new_image.jpg";
}

function restoreImage() {
    document.getElementById("image").src = "original_image.jpg";
}
</script>

</body>
</html>
