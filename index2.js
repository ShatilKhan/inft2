document.getElementById('openFormButton2').addEventListener('click', function(event) {
    document.getElementById('popupForm2').style.display = 'block';
    event.stopPropagation();
});

document.getElementById('popupForm2').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('closeFormButton2').addEventListener('click', function() {
    document.getElementById('popupForm2').style.display = 'none';
});

document.addEventListener('click', function() {
    document.getElementById('popupForm2').style.display = 'none';
});