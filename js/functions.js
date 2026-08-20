"use strict";

function tooltip() {}

function buttonAccessibility(
  inputs,
  additionBtn,
  subtractionBtn,
  multiplicationBtn,
  divisionBtn,
  exponentiationBtn,
  remainderBtn,
  input,
) {
  const isEnabled = inputs.every((elem) => elem.value !== "");
  if (isEnabled == false) {
    console.log("введите значения");
  }
  additionBtn.disabled = !isEnabled;
  subtractionBtn.disabled = !isEnabled;
  multiplicationBtn.disabled = !isEnabled;
  divisionBtn.disabled = !isEnabled;
  exponentiationBtn.disabled = !isEnabled;
  remainderBtn.disabled = !isEnabled;
}

function OnChangeInput(
  inputs,
  additionBtn,
  subtractionBtn,
  multiplicationBtn,
  divisionBtn,
  exponentiationBtn,
  remainderBtn,
) {
  inputs.forEach((input) => {
    input.addEventListener("input", () =>
      buttonAccessibility(
        inputs,
        additionBtn,
        subtractionBtn,
        multiplicationBtn,
        divisionBtn,
        exponentiationBtn,
        remainderBtn,
      ),
    );
  });
}

function assignment() {
  let numeral1Inp = document.getElementById("numeral1");
  let numeral2Inp = document.getElementById("numeral2");
  let numeral1 = Number(numeral1Inp.value);
  let numeral2 = Number(numeral2Inp.value);
  return { numeral1, numeral2 };
}

function addition() {
  let { numeral1, numeral2 } = assignment();
  let result = numeral1 + numeral2;
  document.querySelector("output").innerHTML = result;
}

function subtraction() {
  let { numeral1, numeral2 } = assignment();
  let result = numeral1 - numeral2;
  document.querySelector("output").innerHTML = result;
}

function multiplication() {
  let { numeral1, numeral2 } = assignment();
  let result = numeral1 * numeral2;
  document.querySelector("output").innerHTML = result;
}

function division() {
  let { numeral1, numeral2 } = assignment();
  let result = numeral1 / numeral2;
  document.querySelector("output").innerHTML = result;
}

function remainder() {
  let { numeral1, numeral2 } = assignment();
  let result = numeral1 % numeral2;
  document.querySelector("output").innerHTML = result;
}

function exponentiation() {
  let { numeral1, numeral2 } = assignment();
  let result = numeral1 ** numeral2;
  document.querySelector("output").innerHTML = result;
}
