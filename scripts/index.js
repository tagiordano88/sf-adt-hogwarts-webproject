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

var images = [],
    x = -1;
images[0] = "img/rana-sawalha-W_-6PWGbYaU-unsplash.jpg";
images[1] = "img/sunrise.jpg";
images[2] = "img/world.jpg";
images[3] = "img/journal.jpg";
images[4] = "img/sunset.jpg";