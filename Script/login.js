document.getElementById('btn-login').addEventListener('click', 
    function(event) {
        event.preventDefault();
        const accNum = document.getElementById('acc-num').value;
        const pinNum = document.getElementById('pin-num').value;
        const convertPin = parseInt(pinNum);

        if (accNum.length === 11) {
            if (convertPin === 1234) {
                window.location.href = "./main.html";
            } else {
                alert('Invalid Pin');
            }
        }
        else {
            alert('Invalid Account Number');
        }
})

