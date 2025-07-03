// arrow function
// Arrow functions are a more concise way to write function expressions in JavaScript. They are often used for shorter functions or when you want to preserve the context of `this` in a function. Arrow functions do not have their own `this` context, so they inherit `this` from the surrounding scope.
// Arrow functions are defined using the arrow syntax `() => {}`. They can take parameters and return values just like regular functions. If the function body is a single expression, you can omit the curly braces and the `return` keyword. This makes arrow functions more concise and easier to read.

// arrow function syntax: (parameter1, parameter2, ...) => { // code to be executed }

let getFullName = (fName, lName) => {
  console.log("Using Arrow Function");
  console.log(`The name is ${fName} ${lName}`);
};
getFullName("Aniket", "Dahire");


let oneLinearrow = () => console.log("This is a one line arrow function.");
oneLinearrow(); // This is a one line arrow function.


let addition = (a, b) => console.log("addition is", a + b);
addition(10, 20); // 30


let multi = (a, b) => {
  // console.log(`The multiplication of ${a} and ${b} is`, a * b);
  return a * b;
};
console.log(multi(10, 20));
