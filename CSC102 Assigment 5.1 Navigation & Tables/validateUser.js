 // var firstName = document.getElementById('firstName').value;
function validateInput() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let zipCode = document.getElementById('zipCode').value;
    let fullName = firstName + " " + lastName;

    if (fullName.length > 20) {
        alert("Name must be less than 20 characters.");
        return;
    }

    if (zipCode.length != 5) {
        alert("Zip code must be 5 digits.");
        return;
    }
    // alert("Welcome to the website!");
    document.getElementById('message').innerText = "Secret Message: Welcome to the website!";
}

function backArrow() {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
        window.history.pushState(null, "", window.location.href);
        alert("Back navigation is disabled for this page.");
    };
}
window.onload = backArrow;



/*var c = document.getElementById("agentCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke(); */

window.onload = function () {
    var audio = document.getElementById('myAudio');
    // Check if autoplay is allowed
    audio.play().then(() => {
        console.log("Audio playback started automatically");
    }).catch(error => {
        console.log("Audio playback was prevented. Error: ", error);
        // error is a DOMException object
    });
};

