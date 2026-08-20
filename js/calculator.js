"use srtrict";
document.addEventListener("DOMContentLoaded", function () {
  const additionBtn = document.getElementById("additionBtn");
  const subtractionBtn = document.getElementById("subtractionBtn");
  const multiplicationBtn = document.getElementById("multiplicationBtn");
  const divisionBtn = document.getElementById("divisionBtn");
  const exponentiationBtn = document.getElementById("exponentiationBtn");
  const remainderBtn = document.getElementById("remainderBtn");
  const inputs = [
    document.getElementById("numeral1"),
    document.getElementById("numeral2"),
  ];
  const resultInp = document.getElementById("result");
  const buttonsMathOperations = [
    additionBtn,
    subtractionBtn,
    multiplicationBtn,
    divisionBtn,
    exponentiationBtn,
    remainderBtn,
  ];
  const infoBtn = document.getElementById("button-info");
  infoBtn.addEventListener("click", () => tooltip());
  buttonsMathOperations.forEach((elem) =>
    elem.addEventListener("click", () => assignment()),
  );

  OnChangeInput(
    inputs,
    additionBtn,
    subtractionBtn,
    multiplicationBtn,
    divisionBtn,
    exponentiationBtn,
    remainderBtn,
  );
  additionBtn.addEventListener("click", () => addition());
  subtractionBtn.addEventListener("click", () => subtraction());
  multiplicationBtn.addEventListener("click", () => multiplication());
  divisionBtn.addEventListener("click", () => division());
  exponentiationBtn.addEventListener("click", () => exponentiation());
  remainderBtn.addEventListener("click", () => remainder());
});
