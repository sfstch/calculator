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
  const result = document.getElementById("result");

  console.log(
    "ИНСТРУКЦИЯ КАЛЬКУЛЯТОР    " +
      "1. введите значения в левое поле и правое поле  " +
      "2. нажмите кнопку с необходимой операцией  " +
      "3. нажмите на нижнее поле  ",
  );

  let numeral1 = document.getElementById("numeral1");
  let numeral2 = document.getElementById("numeral2");

  /* buttonsMathOperations.forEach((button) =>
    addEventListener("click", () => variableOutput(numeral1, numeral2)),
  );*/

  // inputs.forEach((input) =>
  //   addEventListener("click", () => {
  //     variableOutput(numeral1, numeral2);
  //   }),
  // );

  OnChangeInput(
    inputs,
    additionBtn,
    subtractionBtn,
    multiplicationBtn,
    divisionBtn,
    exponentiationBtn,
    remainderBtn,
  );
});
