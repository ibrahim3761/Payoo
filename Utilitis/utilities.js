function getInputBYID(id) {
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextByID(id) {
    return parseFloat(document.getElementById(id).innerText);
}

function updateBalance(id, amount) {
    document.getElementById(id).innerText = amount;
}