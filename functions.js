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
  let numeral1Inp = document.getElementById("numeral1.value");
  let numeral2Inp = document.getElementById("numeral2.value");
  let numeral1 = Number(numeral1Inp);
  let numeral2 = Number(numeral2Inp);
  return { numeral1, numeral2 };
}

function addition() {
  return numeral1 + numeral2;
}

function subtraction() {
  return numeral1 - numeral2;
}

function multiplication() {
  return numeral1 * numeral2;
}

function division() {
  return numeral1 / numeral2;
}

function remainder() {
  return numeral1 % numeral2;
}

function exponentiation() {
  return numeral1 ** numeral2;
}
