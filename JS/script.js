const messageBox = document.getElementById('message-box');
const hanna = document.getElementById('hana-name');

// Add hover event listeners to the div
messageBox.addEventListener('mouseover', () => {
    hanna.style.fontSize = '4em'; // Increase the font size
    hanna.style.color = "blue"; // Change the font color
});

messageBox.addEventListener('mouseout', () => {
    hanna.style.fontSize = ''; // Reset the font size to default
    hanna.style.color = ''; // Reset the font color to default
});
