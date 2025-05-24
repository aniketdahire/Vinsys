let student = ["Aniket", "Vedant", "Tejas", "Shubham"];

for (stud of student) {
  // console.log('The element from array:',student);
}
console.log("The element from array:", student);

let country = "India, asia";

let state = ["Maharashtra", "Rajasthan", "Up", "Delhi"];

console.log(country.toLowerCase()); // india
console.log(country.toUpperCase()); // INDIA
console.log(country.trim()); //to remove the space in the string
// console.log(state.toUpperCase()); // MAHARASHTRA
console.log(country.concat(state)); // India Maharashtra

// console.log(state);

console.log(
  "Startwith and endwith",
  country.startsWith("I") && country.endsWith("a")
);

console.log(state.toString().split(","));

console.log(state.toString().toLowerCase());

console.log(state.toString().substring(0, 6));

console.log("Sorted array", student.sort());

let number = [1, 2, 3, 5, 76, 87, 454, 989, 343];

let sortarray = number.sort((a, b) => a - b);

console.log(number);

//to sort using the lenght
let newarray = student.sort((a, b) => a.length - b.length);
console.log(newarray);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;
// let squ = 0;
// squ = num.filter((value) => {
//   squ = value * value;
//   console.log(`the square of number ${value}: `, squ);
//   if (squ % 2 == 0) {
//     sum += squ;
//     // console.log("The sum of squ",sum);//
//   }
// });

// console.log("The sum of squ", sum);

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//using chaning 
let squ1 = num2
  .map(value => value * value)                   // Step 1: Square each number
  .filter(square => square % 2 === 0)            // Step 2: Filter even squares
  .reduce((sum, curr) => sum + curr, 0);         // Step 3: Sum them up

console.log("The sum of even square:", squ1);



// let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = num2
  .map((value) => value % 2 !== 0 ? value * value : 0)  // Square odd numbers, set even to 0
  .filter((oddsqu) => oddsqu !== 0)                      // Filter out 0 values (even numbers)
  .reduce((sum, curr) => sum + curr, 0);                 // Sum the odd squares

console.log("The sum of the odd squares:", odd); // 👉 The sum of the odd squares: 165

  
