handleToggle("cash-out","none");

document.getElementById('tran-his').style.display = 'none';
document.getElementById('add-mny-box').addEventListener('click', function(event) {
    handleToggle("cash-out","none");
    handleToggle("add-mny","block");
    handleToggle("tran-his","none");
});

document.getElementById('cash-out-box').addEventListener('click', function(event) {
    handleToggle("add-mny","none");
    handleToggle("cash-out","block");
    handleToggle("tran-his","none");
});

document.getElementById('tran-his-box').addEventListener('click', function(event) {
    handleToggle("add-mny","none");
    handleToggle("cash-out","none");
    handleToggle("tran-his","block");
});