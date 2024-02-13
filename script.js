function propose() {
    document.body.style.backgroundColor = 'red'; // Change background color to red

    // Create heart elements
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(heart);
    }

    // Redirect to thank you page after a delay
    setTimeout(function () {
        window.location.href = 'thankyou.html';
    }, 3000);
}

document.getElementById('noButton').addEventListener('click', function () {
    var yesButton = document.querySelector('.answerButton');
    var currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentFontSize + 10) + 'px'; // Increase font size by 10px
});

// Add an event listener to the "YES" button directly in JavaScript
document.querySelector('.answerButton').addEventListener('click', function() {
    if (this.textContent === 'YES') {
        propose(); // Call the propose function if the "YES" button is clicked
    }
});

document.querySelector('.nope-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('modal-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
});







  