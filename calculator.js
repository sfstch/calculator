"use srtrict";
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
          result = addition();
          break;
        case "sub":
          result = subtraction();
          break;
        case "multi":
          result = multiplication();
          break;
        case "divi":
          result = division();
          break;
        case "expo":
          result = exponentiation();
          break;
        case "rem":
          result = remainder();
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
