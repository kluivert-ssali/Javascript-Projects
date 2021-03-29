// number 
//const firstnumber = 5;
//const secondnumber = 9;

//const sum = firstnumber / secondnumber;
//console.log(sum);

//Booleans
//const iscool = true;

//if(iscool) {
  //  console.log("Hi man, you're cool");
//} else {
//    console.log('Oh, king')
//} 

//object
/* 
const person = {
    name: 'kingslayer',
    age:19,
}
//Dot notation
console.log(person.name);

//Array
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const date = new Date();
console.log(date)

*/

// comparison operators => true/false
//const a = 5;
//const b = 10;

//is equal
//console.log(b == a);
//not equal
//console.log(a != b)

//strict Equality
//console.log(a === b);

// logical operators( OR, AND, NOT)
//AND && => ALL OPERANDS ARE TRUE => TRUE
//console.log(true && false && true)

// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
//console.log(true || false)

// NOT !
//console.log(!false)
 
// The while Loop

//const age = 10;

//if (age > 18) {
//    console.log('You may enter');
//} else if (age === 18) {
//    console.log ('you ahev just turned 18, welcome');
//} else {
//    console.log('Grow up Bitch!!');
//}

// The while Loop
//let i = 0;

//while (i < 10) {
  //  console.log(i);
    //i++
//}

//The for loop
//for (let i = 0; i < 10; i++) {
//    console.log(i);  
//}

//fUNCTIONS
//a block of code ==> performs a task
//A function declaration (definiting a function)
// function square(number) {
    // return number * number;
// }

//Afunction call (calling/executing a function)
// const result = square(5);

// console.log(result);

// Afunction declaration
// function name(params){
//     // statements
// }

// // A function expression
// const name = function(params) {
//     // statements
// }

// //An arrow function
// const name = (params) ==> {
//     //statements
const square = (number) => {
    return number * number;
}

const result = square(10);
console.log(result); 
