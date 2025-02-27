document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accAmount = getInputBYID("acc-amount");
    const pin = getInputBYID("pin-num");
    const mainBal = getInnerTextByID("main-bal");
    const accNum= document.getElementById("acc-num").value;
    if (pin && accAmount && accNum.length === 11) {
      if (pin === 1234) {
        const sum = mainBal + accAmount;
        updateBalance("main-bal", sum);
        document.getElementById("acc-amount").value = "";
      }
      else {
        alert("Invalid Pin");
      }
    } 
    else {
      alert("Enter Correct Account number with cash amount and Pin");
    }
  });
