// Counter to track the number of clicks
let clickCount = 0;

// Select the button
const button = document.getElementById('confessButton');

// Add event listener for button click
button.addEventListener('click', function() {
    // Increase click count
    clickCount++;

    if (clickCount < 3) {
        // Randomly move the button to a new position on the screen
        const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
        
        // Apply the new position to the button
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    } else {
        // After 3rd click, redirect to the confession page
        window.location.href = 'confession.html';
    }
});
