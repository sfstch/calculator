"use srtrict";
document.addEventListener("DOMContentLoaded", function () {
  // const additionBtn = document.getElementById("additionBtn");
  // const subtractionBtn = document.getElementById("subtractionBtn");
  // const multiplicationBtn = document.getElementById("multiplicationBtn");
  // const divisionBtn = document.getElementById("divisionBtn");
  // const exponentiationBtn = document.getElementById("exponentiationBtn");
  // const remainderBtn = document.getElementById("remainderBtn");
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
      }
      button.addEventListener("click", () => assignment());
    });

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
});
