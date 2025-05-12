// Guard Clause

let age2 = 0;

// only when age2 is null or undefined, the default value of 18 will be assigned to result
let result = age2 ?? 18;
console.log(result); // 18
// The above code is a simple example of using the nullish coalescing operator in JavaScript.

let age3 = undefined;

//only when age3 is null or undefined, the default value of 18 will be assigned to result1  
// otherwise, the value of age3 will be assigned to result1
let result1 = age3 ?? 18;
console.log('Guard',result1); // 20

// default operator


// if age4 is falsy (0, "", null, undefined, NaN), the default value of 18 will be assigned to result2
let result2 = age3 || 18;
console.log("default",result2); // 20


