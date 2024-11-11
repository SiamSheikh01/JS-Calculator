const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Define function to calculate.

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //If output has '%', replace with '/100' .
    
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    
    output = output.toString().slice(0, -1);
  } else {
   
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
