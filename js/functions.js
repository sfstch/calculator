"use strict";

function variableOutput(
  inputs,
  additionBtn,
  subtractionBtn,
  multiplicationBtn,
  divisionBtn,
  exponentiationBtn,
  remainderBtn,
  input,
) {
  const isEnabled = inputs.every((inputs) => {
    if (inputs.value !== "") {
      return;
    } else {
      console.log("введите значения");
    }
  });
  console.log(inputs.every((elem) => elem.value !== ""));
  additionBtn.disabled = false;
  subtractionBtn.disabled = false;
  multiplicationBtn.disabled = false;
  divisionBtn.disabled = false;
  exponentiationBtn.disabled = false;
  remainderBtn.disabled = false;
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
      variableOutput(
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

function addition() {}

function subtraction() {}

function multiplication() {}

function division() {}

function exponentiation() {}

function remainder() {}
