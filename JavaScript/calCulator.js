// Initial value of the calculator input is set to an empty string.
let initialvalue = "";

// Function to append values (numbers or operators) to the input display.
function appendValue(value) {
  initialvalue += value;  // Add the clicked value to the initialvalue string.
  document.querySelector("#result").value = initialvalue;  // Update the display with the new value.
}

// Function to clear the result (reset the input display).
function clearResult() {
  initialvalue = "";  // Reset the initialvalue to an empty string.
  document.querySelector("#result").value = initialvalue;  // Clear the display.
}

// Function to delete the last character in the input (backspace functionality).
function deleteResult() {
  initialvalue = initialvalue.slice(0, -1);  // Remove the last character from the initialvalue.
  document.querySelector("#result").value = initialvalue;  // Update the display with the new value.
}

// Function to calculate the result of the expression entered by the user.
function calculate() {
  try {
    initialvalue = eval(initialvalue);  // Use eval to evaluate the expression.
    document.querySelector("#result").value = initialvalue;  // Display the result of the evaluation.
  } catch (error) {
    document.querySelector("#result").value = "Error";  // In case of invalid input, display 'Error'.
  }
}

// The second version of the calculate function (seems redundant). It replaces the operator '^' with '**' for exponentiation.
function calculate() {
  try {
    // Replace '^' with '**' for exponentiation and 'x' with '*' for multiplication before evaluation.
    let expression = initialvalue.replace(/\^/g, "**").replace(/\x/g, "*");
    
    initialvalue = eval(expression);  // Evaluate the expression after replacements.
    document.querySelector('#result').value = initialvalue;  // Update the display with the result.
  } catch (error) {
    document.querySelector('#result').value = 'Error';  // Display 'Error' if the evaluation fails.
  }
}
