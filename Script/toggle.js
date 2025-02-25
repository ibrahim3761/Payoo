document.getElementById('cash-out').style.display = 'none';
document.getElementById('add-mny-box').addEventListener('click', function(event) {
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-mny').style.display = 'block';
});

document.getElementById('cash-out-box').addEventListener('click', function(event) {
    document.getElementById('add-mny').style.display = 'none';
    document.getElementById('cash-out').style.display = 'block';
});