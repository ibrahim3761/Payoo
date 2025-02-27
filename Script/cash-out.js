document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNum = document.getElementById("cahsout-acc-num").value;
    const pin = getInputBYID("cashout-pin-num");
    const accAmount = getInputBYID("cashout-amount");
    const mainBal = getInnerTextByID("main-bal");
    if(accAmount < 0 && isNaN(accAmount)){
      alert("Enter a valid amount");
    }
    else if (accAmount > mainBal) {
      alert("Insufficient Balance");
    } 
    else {
      if (pin && accAmount && accNum.length === 11) {
        if (pin === 1234) {
          const Bal = mainBal - accAmount;
          updateBalance("main-bal", Bal);
          document.getElementById("acc-amount").value = "";
          const p = document.createElement("p");
          p.innerText = `
            Cashed out ${accAmount} from ${accNum}
          `;
          document.getElementById("tran-his").appendChild(p);
        } else {
          alert("Invalid Pin");
        }
      } else {
        alert("Enter vaslid account number with amount and pin");
      }
    }
  });
