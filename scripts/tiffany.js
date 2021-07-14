
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}
      
function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}
      
function startTimer() {
    setInterval(displayNextImage, 3000);
}
      
var images = [], x = -1;
    images[0] = "../img/skyline.jpg";
    images[1] = "../img/shoreline.jpg";
    images[2] = "../img/coast.jpg";
            