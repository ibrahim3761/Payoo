document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accAmount = document.getElementById("acc-amount").value;
    const conAmount = parseFloat(accAmount);
    const pin = document.getElementById("pin-num").value;
    const conPin = parseInt(pin);
    const mainBal = document.getElementById("main-bal").innerText;
    const conBal = parseFloat(mainBal);
    if (conPin && accAmount) {
      if (conPin === 1234) {
        const sum = conBal + conAmount;
        document.getElementById("main-bal").innerText = sum;
        document.getElementById("acc-amount").value = "";
      }
      else {
        alert("Invalid Pin");
      }
    } 
    else {
      alert("Enter Amount and Pin");
    }
  });
