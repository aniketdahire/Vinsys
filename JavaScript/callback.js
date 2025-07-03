function sayhello() {
  console.log("Hello World");
}

function callhello(sayhello) {
  sayhello();
}

callhello(sayhello);

function greet(name, callback) {
  console.log("Hello " + name + "!");
  callback(name);
}

function sayGoodbye(name) {
  console.log("Goodbye " + name + "!");
}

greet("John", sayGoodbye); // Output: Hello John! Goodbye John!

function add2(a, b) {
  console.log("The addition using callback function :", a + b);
}

function calladd2(callback, x, y) {
  callback(x, y);
}

calladd2(add2, 50, 100);

// we can send explicit paramerter to it like this

function add2(a, b) {
  console.log("The addition using callback function:", a + b);
}

function calladd2(callback) {
  callback(20, 10); // passing parameters here
}

calladd2(add2);

let add = (a, b) => console.log("The addition of a and b is :", a + b);
let multi = (a, b) => console.log("The multiplication of a and b is :", a * b);
let div = (a, b) => console.log("The division of a and b is :", a / b);
let sub = (a, b) => console.log("The substraction of a and b is :", a - b);


let operation = (operationpara,x,y) => operationpara(x,y);

operation(add,50,20);
operation(sub,45,20);
operation(multi,35,25);
operation(div,366,54);