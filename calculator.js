"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const inputs = [
    document.getElementById("numeral1"),
    document.getElementById("numeral2"),
  ];
  const resultInp = document.getElementById("result");
  const buttonsMathOperations = [...document.querySelectorAll("button")];

  buttonsMathOperations.forEach((button) => {
    const buttonName = button.getAttribute("name");
    button.addEventListener("click", () => {
      let { numeral1, numeral2 } = assignment();
      let result;
      switch (buttonName) {
        case "add":
          result = addition(numeral1, numeral2);
          break;
        case "sub":
          result = subtraction(numeral1, numeral2);
          break;
        case "multi":
          result = multiplication(numeral1, numeral2);
          break;
        case "divi":
          result = division(numeral1, numeral2);
          break;
        case "expo":
          result = exponentiation(numeral1, numeral2);
          break;
        case "rem":
          result = remainder(numeral1, numeral2);
          break;
        default:
          console.log("действие отсутствует");
      }
      console.log();
      document.querySelector("output").innerHTML = result;
    });
    OnChangeInput(inputs, buttonsMathOperations);
  });
});
