//* Palindrome Checker CSC102: Assignment 3.1 12/02/2023
document.getElementById('checkButton').addEventListener('click', function () {
    while (true) {
        let input = prompt("Enter a word or phrase:");
        if (!input) break; // Exits if the user presses cancel

        // Check if the input is a palindrome
        let isPalindrome = checkPalindrome(input);

        // Notify the user
        alert(isPalindrome ? "It's a palindrome!" : "Not a palindrome.");

        // Ask the user if they want to try again
        let tryAgain = prompt("Check another word? (yes/no)");
        if (tryAgain.toLowerCase() !== 'yes') break;
   }
});
//* Function to check if a string is a palindrome
function checkPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase(); 
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }}
    return true;
}

function playSound() {
    var audio = document.getElementById("backgroundSound");
    audio.play();
}
function stopSound() {
    window.location.reload();
}














/* Palindrome Checker

// Function to check if a string is a palindrome
function isPalindrome(str) {
    var cleanStr = str.replace(/\s+/g, '').toLowerCase();
    var reverseStr = cleanStr.split('').reverse().join('');
    return cleanStr === reverseStr;
}

// Main loop
while (true) {
    var userInput = prompt("Enter a word or phrase to check if it's a palindrome. Type 'exit' to stop.");

    // Exit condition
    if (userInput.toLowerCase() === 'exit') break;

    // Check for palindrome
    if (isPalindrome(userInput)) {
        alert("'" + userInput + "' is a palindrome!");
    } else {
        alert("'" + userInput + "' is not a palindrome.");
    }

    // Optional: Additional user choice using a switch statement('yes' to continue, 'no' to exit)
    var userChoice = prompt("Do you want to check another word? Enter 'yes' to continue or 'no' to exit.");
    switch (userChoice.toLowerCase()) {
        case 'no':
            alert("Thank you for using the palindrome checker!");
            break;
        case 'yes':
            continue;
        default:
            alert("Invalid input, exiting the checker.");
            break;
    }
    if (userChoice.toLowerCase() === 'no') break;
}
*/