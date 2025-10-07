// This file contains the JavaScript code for the project. 
// It may include functions to manipulate the DOM, handle events, 
// and implement any interactive features of the web page.

document.addEventListener('DOMContentLoaded', function() {
    // Example function to display a welcome message
    function displayWelcomeMessage() {
        const welcomeElement = document.createElement('h1');
        welcomeElement.textContent = 'Welcome to the Git Practice Project!';
        document.body.appendChild(welcomeElement);
    }

    displayWelcomeMessage();
});