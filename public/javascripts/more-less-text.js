document.getElementById('more-btn').addEventListener('click', function() {
    document.getElementById('short-description').style.display = 'none';
    document.getElementById('full-description').style.display = 'inline';
    document.getElementById('more-btn').style.display = 'none';
    document.getElementById('less-btn').style.display = 'inline';
});

document.getElementById('less-btn').addEventListener('click', function() {
    document.getElementById('short-description').style.display = 'inline';
    document.getElementById('full-description').style.display = 'none';
    document.getElementById('more-btn').style.display = 'inline';
    document.getElementById('less-btn').style.display = 'none';
});
