// function Restart to set values to zero
// Reset game variables
arrangeLayout();
function Restart() {
die1 = 0; 
die2 = 0; 

// Update the game's UI elements to their initial state
document.getElementById('gameResult').innerHTML = ""; // Clear any game results displayed
    // Hide the video
    var video = document.getElementById('winVideo');
    video.style.display = 'none';

document.body.style.backgroundColor = "lightblue"; // Reset background color or other styles
    
    video.pause(); // Pause the video
    video.currentTime = 0; // Set the current time
    


}
function arrangeLayout() {
    var container = document.getElementById('container');
    var video = document.getElementById('winVideo');
    var buttons = document.getElementById('buttons');

    // Use Flexbox
    container.style.display = 'flex';
    container.style.alignItems = 'center';

    // Set order if needed
    video.style.order = '1';
    buttons.style.order = '2';

    // Optional: Add spacing
    buttons.style.marginLeft = '20px';
}

// Call this function when you want to rearrange the layout
//arrangeLayout();

function robotVideo()
{
    let video = document.createElement('video');
    video.setAttribute('src', 'Adapt-O-Robotvideo.mp4');
    video.id = "robots";
    //var video = document.getElementById('myVideo');
   // video.classList.add('move-right');
    document.body.style.backgroundColor = "green"; // Changes background color to green
    video.play();

} 

// Function to play Craps
function playCraps() {
    // Generate two random numbers for dice
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var sum = die1 + die2;
    

    // Display the dice roll- - .innerHTML <----updates the webpage
    document.getElementById('gameResult').innerHTML = "Dice Rolls: " + die1 + " and " + die2 + "<br>";
   
      function resetAnimation() {
        var element = document.getElementById('gameResult');
        element.classList.remove('win-animation');
        void element.offsetWidth; // 
        element.classList.add('win-animation');
    }
    // Check for a loss condition
    if (sum === 7 || sum === 11) {
        document.getElementById('gameResult').innerHTML = "CRAPS - You lose!";
    }
    // Check for a win condition
    else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById('gameResult').innerHTML = "You won!";
        document.getElementById('robotVideo').style.display = "block"; // Show the iframe
        
         resetAnimation();
        
    }
    // Push condition
    else {
        document.getElementById('gameResult').innerHTML += "You pushed!";
    }
}

// Example of a function with parameters
function exampleFunctionWithParameter(inputValue) {
    // Process the input value and output results
    // For demonstration purposes, let's just log it to the console
    console.log("Received input:", inputValue);
}

