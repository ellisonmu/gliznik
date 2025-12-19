// This selects the button from the HTML
const button = document.getElementById('clickMeBtn');
const message = document.getElementById('message');

// This listens for a "click"
button.addEventListener('click', function() {
    const date = new Date();
    message.innerText = "You clicked me at: " + date.toLocaleTimeString();
    alert("Welcome to your first Javascript interaction!");
});