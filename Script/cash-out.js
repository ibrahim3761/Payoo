document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("cashout-pin-num").value;
    const conPin = parseInt(pin);
    const accAmount = document.getElementById("cashout-amount").value;
    const conAmount = parseFloat(accAmount);
    const mainBal = document.getElementById("main-bal").innerText;
    const conBal = parseFloat(mainBal);
    if (conPin && accAmount) {
      if (conPin === 1234) {
        const Bal = conBal - conAmount;
        document.getElementById("main-bal").innerText = Bal;
        document.getElementById("acc-amount").value = "";
      } else {
        alert("Invalid Pin");
      }
    } 
    else {
      alert("Enter Amount and Pin");
    }
  });
