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
      assignment();
      switch (buttonName) {
        case "add":
          addition();
          break;
        case "sub":
          subtraction();
          break;
        case "multi":
          multiplication();
          break;
        case "divi":
          division();
          break;
        case "expo":
          exponentiation();
          break;
        case "rem":
          remainder();
          break;
        default:
          console.log("действие отсутствует");
      }
      button.addEventListener("click", () => assignment());
    });

    OnChangeInput(inputs, buttonsMathOperations);
  });
});
