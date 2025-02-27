document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = getInputBYID("cashout-pin-num");
    const accAmount = getInputBYID("cashout-amount");
    const mainBal = getInnerTextByID("main-bal");
    if (pin && accAmount) {
      if (pin === 1234) {
        const Bal = mainBal - accAmount;
        updateBalance("main-bal", Bal);
        document.getElementById("acc-amount").value = "";
      } else {
        alert("Invalid Pin");
      }
    } 
    else {
      alert("Enter Amount and Pin");
    }
  });
