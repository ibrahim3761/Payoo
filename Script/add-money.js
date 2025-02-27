document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accAmount = getInputBYID("acc-amount");
    const pin = getInputBYID("pin-num");
    const mainBal = getInnerTextByID("main-bal");
    const accNum = document.getElementById("acc-num").value;
    const selectedBank = document.getElementById("select-bank").value;
    
    if (selectedBank === "Select Bank") {
      alert("Select a Bank");
    }
    else if (accAmount < 0 && isNaN(accAmount)) {
      alert("Enter a valid amount");
    } else {
      if (pin && accAmount && accNum.length === 11) {
        if (pin === 1234) {
          const sum = mainBal + accAmount;
          updateBalance("main-bal", sum);
          document.getElementById("acc-amount").value = "";
          
          const p = document.createElement("p");
          p.innerText = `
            Added ${accAmount} to ${accNum} by ${selectedBank}
          `;
          document.getElementById("tran-his").appendChild(p);
        } else {
          alert("Invalid Pin");
        }
      } else {
        alert("Enter Correct Account number with cash amount and Pin");
      }
    }
  });
