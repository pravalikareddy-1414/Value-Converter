let inputButton = document.getElementById("converterbutton");
let Meter = document.getElementById("box1");
let Liter = document.getElementById("box2");
let pounds = document.getElementById("box3");
let userValue = document.getElementById("userinput");
let lengthResult = document.getElementById("lengthResult");
let volumeResult = document.getElementById("volumeResult");
let kilogramResult = document.getElementById("kilogramResult");

//1 meter = 3.281 feet
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound

inputButton.addEventListener("click", function () {
  let value = parseFloat(userValue.value);
  if (isNaN(value)) {
    alert("Please enter a valid number");
    return;
  }
  let meter = (value * 3.281).toFixed(2);
  let feet = (value / 3.281).toFixed(2);
  lengthResult.innerHTML = `${value} meters = ${meter} feet | ${value} feet = ${feet} meters`;
  let liter = (value * 0.264).toFixed(2);
  let gallon = (value / 0.264).toFixed(2);
  volumeResult.innerHTML = `${value} liter = ${liter} gallon | ${value} gallon = ${gallon} liter `;
  let kilogram = (value * 2.204).toFixed(2);
  let pound = (value / 2.204).toFixed(2);
  kilogramResult.innerHTML = `${value} kilos = ${kilogram} pound| ${value} pound = ${pound} kilos`;
});
