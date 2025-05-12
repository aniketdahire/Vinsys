// function declaration
// function is a block of code that performs a specific task. It is a reusable piece of code that can be called multiple times in a program.
// Functions can take input parameters and return a value. They are used to organize code and make it more readable and maintainable.
// Functions can be declared using the function keyword followed by the function name and parentheses. The code inside the function is enclosed in curly braces.
// Functions can also be anonymous, meaning they do not have a name. Anonymous functions are often used as callbacks or in higher-order functions.
// Functions can also be assigned to variables, passed as arguments to other functions, and returned from other functions. This allows for more flexible and dynamic programming.

// function syntax: function functionName(parameter1, parameter2, ...) { 
// // code to be executed 
//}

// function functionName(parameter1, parameter2, ...) { // code to be executed }
function add(a,b){
    console.log(`The additon of ${a} and ${b} is`, (a + b)); 
    return a + b;
  }
  add(10,20);
  
  let result3 = add(10,20);
  console.log(result3); // 30
  
  
  
  function sub (a,b){
    console.log(`The substraction of ${a} and ${b} is`, (a - b));
  }
  
  sub(20,10);
  
  function Name (fName, lName){
    console.log(`The name is ${fName} ${lName}`);
    return fName + " " + lName;
  
  }
  
  Name("Aniket", "Dahire");
  
  let result4 = Name("Aniket", "Dahire");
  console.log(result4); // Aniket Dahire