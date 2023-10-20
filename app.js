var cuentas = [
  { nombre: "Mali", saldo: 200, password: "1234" },
  { nombre: "Gera", saldo: 290, password: "5678" },
  { nombre: "Maui", saldo: 67, password: "abcd" },
];

var selectedAccountIndex = -1;
var currentAccount = null;

function verificarPassword() {
  var password = document.getElementById("password").value;

  if (currentAccount.password === password) {
    document.getElementById("passwordInput").style.display = "none";
    document.getElementById("opciones").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Inténtalo nuevamente.");
  }
}

function consultarSaldo() {
  alert("Saldo actual: $" + currentAccount.saldo);
}

function ingresarMonto() {
  var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));

  if (!isNaN(monto)) {
    var nuevoSaldo = currentAccount.saldo + monto;
    if (nuevoSaldo <= 990 && nuevoSaldo >= 10) {
      currentAccount.saldo = nuevoSaldo;
      alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + currentAccount.saldo);
    } else {
      alert("Error: El monto debe ser mayor a 10$ y menor a 990$ - Intentalo de nuevo.");
    }
  } else {
    alert("Vuelve pronto.");
  }
}

function retirarMonto() {
  var monto = parseFloat(prompt("Ingresa el monto a retirar:"));

  if (!isNaN(monto)) {
    var nuevoSaldo = currentAccount.saldo - monto;
    if (nuevoSaldo >= 10 && nuevoSaldo <= 990) {
      currentAccount.saldo = nuevoSaldo;
      alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + currentAccount.saldo);
    } else {
      alert("Error: El monto a retirar debe dejar un saldo mínimo de $10 y no exceder los $990.");
    }
  } else {
    alert("Vuelve pronto.");
  }
}

document.getElementById("cuentas").addEventListener("change", function () {
  var selectedOption = this.options[this.selectedIndex];
  selectedAccountIndex = parseInt(selectedOption.value);
  currentAccount = cuentas[selectedAccountIndex - 1];

  if (selectedAccountIndex !== 0) {
    document.getElementById("passwordInput").style.display = "block";
    document.getElementById("opciones").style.display = "none";
    document.getElementById("password").value = "";
  } else {
    document.getElementById("passwordInput").style.display = "none";
    document.getElementById("opciones").style.display = "none";
  }
});
