function generateTable() {
  var num = Number(document.getElementById("numberInput").value);
  var output = document.getElementById("tableOutput");

  if (!num) {
    output.innerText = "Please enter a number!";
    return;
  }

  var table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${num}  x  ${i}  =  ${num * i}\n`;
  }

  output.innerText = table;
}

function clearTable() {
  document.getElementById("tableOutput").innerText = "";
  document.getElementById("numberInput").value = "";
}
