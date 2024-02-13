document.querySelector('.nope-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
});

document.getElementById('modal-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
});
