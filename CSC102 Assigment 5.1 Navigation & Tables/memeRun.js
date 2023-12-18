
// memeRun.js
// MemeImage is the image to be animated
// Use arrow keys to move
// by Akil Bonner 2023 

//const  image = document.getElementById("memeImage");
// memeRun.js
// MemeImage is the image to be animated, use arrow keys to move
document.addEventListener('keydown', function (event) {
    const img = document.getElementById('movingImage');
    let left = img.offsetLeft;
    let top = img.offsetTop;

    switch (event.key) {
        case "ArrowLeft": // Left arrow
            left -= 10; // Move left
            break;
        case "ArrowRight": // Right arrow
            left += 10; // Move right
            break;
        case "ArrowUp": // Up arrow
            top -= 10; // Move up
            break;
        case "ArrowDown": // Down arrow
            top += 10; // Move down
            break;
    }

    // Set new position
    img.style.left = left + 'px';
    img.style.top = top + 'px';
});

/*var a = document.getElementById("memeImage");
a.style.position = "relative";
a.style.left = "0px";
a.style.top = "0px";
a.style.right = "0px";
a.style.down = "0px";  

function fun(b) {
    if (b === "left") {

        a.style.left = (parseInt(a.style.left) - 10) + "px";
    }
    if (b === "right") {
        a.style.left = (parseInt(a.style.left) + 10) + "px";
    }
    if (b === "up") {
        a.style.top = (parseInt(a.style.top) - 10) + "px";
    }
    if (b === "down") {
        a.style.top = (parseInt(a.style.top) + 10) + "px";
    }
    if (b == "top-right") {
        a.style.left = (parseInt(a.style.left) + 10) + "px";
        a.style.top = (parseInt(a.style.top) - 10) + "px";
    }
    if (b == "top-left") {
        a.style.left = (parseInt(a.style.left) - 10) + "px";
        a.style.top = (parseInt(a.style.top) - 10) + "px";
    }
    if (b == "bottom-right") {
        a.style.left = (parseInt(a.style.left) + 10) + "px";
        a.style.top = (parseInt(a.style.top) + 10) + "px";
    }
    if (b == "bottom-left") {
        a.style.left = (parseInt(a.style.left) - 10) + "px";
        a.style.top = (parseInt(a.style.top) + 10) + "px";
    }

}  

 

function stopAnimation() {
    clearInterval(moveInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}
// moves the image to the right by 5 pixels every 50 milliseconds
function moveMeme() {
    let currentLeft = parseInt(window.getComputedStyle(memeImage).left, 10);
    memeImage.style.left = (currentLeft + 5) + 'px'; // Move right by 5px
}

function openCatalog() {
    window.open('https://www.uat.edu/media/UAT_Catalog_2023_V2.pdf', '_blank');
}

// Initialize the left position of the image
memeImage.style.left = '0px';

// Bind click events to buttons
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
catalogButton.addEventListener("click", openCatalog);












    

/*

function sound(src)
{ // creating a brand new component
    this.sound = document.createElement("audio"); // creating a new audio element
    this.sound.src = src; // setting the source of the audio element to the source of the sound file
    this.sound.setAttribute("preload", "auto"); // preload the audio file
    this.sound.setAttribute("controls", "none"); // do not display the audio controls
    this.sound.style.display = "none"; // do not display the audio element
    document.body.appendChild(this.sound); // add the audio element to the body of the HTML document
    this.play = function()
    { // function to play the audio file
        this.sound.play(); // play the audio file
    }
    this.stop = function()
    { // function to stop the audio file
        this.sound.pause(); // pause the audio file
    //    this.sound.currentTime = 0; // reset the audio file to the beginning  } */// Path: memeRun.js*
    //////////////////////////////*/



