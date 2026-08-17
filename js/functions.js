"use strict";

function variableOutput(
  inputs,
  additionBtn,
  subtractionBtn,
  multiplicationBtn,
  divisionBtn,
  exponentiationBtn,
  remainderBtn
) {
  inputs.forEach((input) => {
    if (input.value !== "") {
      additionBtn.disabled = false;
      subtractionBtn.disabled = false;
      multiplicationBtn.disabled = false;
      divisionBtn.disabled = false;
      exponentiationBtn.disabled = false;
      remainderBtn.disabled = false;
    } else {
      console.log("введите значения");
    }
  });
}

function OnChangeInput(
  inputs,
  additionBtn,
  subtractionBtn,
  multiplicationBtn,
  divisionBtn,
  exponentiationBtn,
  remainderBtn,
input) {
input.addEventListener ("input", () =>
variableOutput( 
  inputs,
  additionBtn,
  subtractionBtn,
  multiplicationBtn,
  divisionBtn,
  exponentiationBtn,
  remainderBtn);
)}

function addition() {}

function subtraction() {}

function multiplication() {}

function division() {}

function exponentiation() {}

function remainder() {}
