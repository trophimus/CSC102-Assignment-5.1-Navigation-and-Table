
// This function is called when the user clicks the 'Submit' button
function validateCred() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the fields are empty
    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return false;
    }

    // Check if the password is 'today'
    if (password !== 'today') {
        alert('Incorrect password. Please try again.');
        return false;
    }

    // If validation passes
    alert('Credentials submitted!');
    
}
function clearForm() {
    // Assuming 'credSubmit' is the ID of your form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}







function nextPage()
{
    window.open("boards.html");
}
