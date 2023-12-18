// Event listener for the check palindrome button
document.getElementById('checkButton').addEventListener('click', function () {
    var input = document.getElementById('input').value; // Get input from the text field
    if (input) { // Check if input is not empty
        let isPalindrome = checkPalindrome(input);
        // Display result
        document.getElementById('result').innerHTML = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
    }
});

// Function to check if a string is a palindrome
function checkPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}
