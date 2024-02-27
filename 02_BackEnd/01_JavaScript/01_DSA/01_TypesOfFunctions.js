//> 1. Basic Syntax
// function funct(a, b) {
//   const sum = a + b;
//   return sum;   // this either returns the value or undefined.
// }

//> 2. Anonymous Function, where we are excluding the functionName and assigned it to the variable.
// var funcA1 = function(a,b){
//     const sum = a+b;
//     return sum;
// }

//> IIFE(Immediately Invoked Function Expression)
//* This gives the opportunity to encapsulate the variable within the new scope.
//* Ex. sum can't be used anywhere outside the function body.
//- Syntax: (functionWrapped)(args)
// const result = (function (a, b) {
//   const sum = a + b;
//   return sum;
// })(3, 4);

// console.log(result);

//> Function Hoisting
//* where the function is being used before it's being initialized.
//! Bad Practice, reduces the readablity.
// function createFunc() {
//   return f;
//   function f(a, b) {
//     const sum = a + b;
//     return sum;
//   }
// }
// const fun = createFunc();
// console.log(fun(3, 4));

// ==============================================

//> TODO Closures
// When a functionis created, it has the access to a refrence of all the variables declared around it. Also known as lexcial enviornment.
// The combination of a function and its enviornment is called closure.

// =============================================

//> 1_Arrow Function, Basic
// const f = (a, b) => {
//   const sum = a + b;
//   return sum;   //if dint get anything to return, it would implicitly get undefined
// };
// console.log(f(3, 4));

//> 2_If written in 1line Omit (return) keyword
//* If code is of single line, return keyword can be omited which results in shorted code.
const f = (a, b) => a + b;
console.log(f(3, 4));

// =================================================

//> Difference b/w Arrow Syntax and Function Syntax
// More minimal code, Anonymous Function and Single Line Function are generally preffered over other functions.
// no automatic hoisting, We are allowed to use the function after it is declared. which increases the readability.
