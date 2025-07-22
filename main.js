
window.onload = function () {
  const savedBill = localStorage.getItem("bill");
  const savedTip = localStorage.getItem("tip");
  const savedCurrency = localStorage.getItem("currency");

  if (savedBill) document.getElementById("bill").value = savedBill;
  if (savedTip) document.getElementById("tip").value = savedTip;
  if (savedCurrency) document.getElementById("currency").value = savedCurrency;
};

function calculate() {
  const bill = document.getElementById("bill").value;
  const tip = document.getElementById("tip").value;
  const currency = document.getElementById("currency").value;


  localStorage.setItem("bill", bill);
  localStorage.setItem("tip", tip);
  localStorage.setItem("currency", currency);

  const billNum = Number(bill);
  const tipNum = Number(tip);

  if (isNaN(billNum) || isNaN(tipNum)) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  const tipAmount = billNum * (tipNum / 100);
  const total = billNum + tipAmount;

  document.getElementById("result").innerText = 
    `Tip: ${currency}${tipAmount.toFixed(2)}\nTotal: ${currency}${total.toFixed(2)}`;
}
