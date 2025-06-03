let number = [12, 34, 53, 65, 22, 66, 7, 88, 9, 99];

console.log(number);
console.log("The length of number array:", number.length);
number.push(55);
console.log("55 push in the number", number);
number.pop(55);
console.log("55 pop in the number", number);
number.shift(12);
console.log("The 12 number remove from array ", number);
number.unshift(12);
console.log("The 12 number add in  array ", number);
number.includes(100);
console.log("The 100 add in arary ", number.includes(100));// give answer in true or false if number present or not 

console.log("The index of", number.indexOf(53));
console.log("The lastindex of ", number.lastIndexOf(9));

number.splice(2,0,100);
console.log("The splice" , number);


console.log("The slice is ",number.slice(2,7));

console.log(number);


console.log("The slice in negative:",number.slice(-5,-1));





let number2 = [11,45,676,34,788,4,34,56];
console.log("Using for each ");

number2.forEach((value,index,array) => {
    console.log(`value: ${value}, Index: ${index}, Array: [${array}]`);
    
});



let fruits = ['apple','banana','mango'];

fruits.forEach((fruit, index) =>{
    console.log(`Fruit at index ${index} is ${fruit}`);
    
})


let number3 = [1,2,4];

let doubled = number3.map(num => num * 2);

console.log(doubled);


let num = [1,23,44,5,66,34,67,22,33];

console.log('Using map');

let num1 = num.map((value) => {
    if (value % 2 == 0){
        console.log(value);   
    }
})

console.log('using for each');

num.forEach((value) =>{
    if (value % 2 == 0){
        console.log(value);
    }  
})

console.log('Using filter');

let num2 = num.filter((value) => {
    if (value % 2 == 0){
        console.log(value);   
    }
})

console.log('Sum of the array');

let sum1 = 0;
let sum2= num.map((value) => {
    sum1 += value;
    
});//dont use map for sum use only for the 

console.log("the sum of array is using map:",sum1);


let sum = 0;
num.forEach((value)=>{
    sum += value;
    
})

console.log("the sum using for each:",sum)


let sum4 = num.reduce((privousval,currentval) => {
    return privousval + currentval;
})

console.log("the sum using reduce:",sum4);
