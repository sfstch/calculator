"use strict";

function buttonAccessibility(inputs, buttonsMathOperations, input) {
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

function OnChangeInput(inputs, buttonsMathOperations) {
  inputs.forEach((input) => {
    input.addEventListener("input", () =>
      buttonAccessibility(inputs, buttonsMathOperations),
    );
  });
}

function assignment() {
  let numeral1Inp = document.getElementById("numeral1");
  let numeral2Inp = document.getElementById("numeral2");
  const numeral1 = Number(numeral1Inp.value);
  const numeral2 = Number(numeral2Inp.value);
  return { numeral1, numeral2 };
}

function addition(numeral1, numeral2) {
  return numeral1 + numeral2;
}

function subtraction(numeral1, numeral2) {
  return numeral1 - numeral2;
}

function multiplication(numeral1, numeral2) {
  return numeral1 * numeral2;
}

function division(numeral1, numeral2) {
  return numeral1 / numeral2;
}

function remainder(numeral1, numeral2) {
  return numeral1 % numeral2;
}

function exponentiation(numeral1, numeral2) {
  return numeral1 ** numeral2;
}
