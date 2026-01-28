// // code that will throw tdz(temporal dead zone)error using let variable:
// console.log(a);
// let a=10;
// const b=20;

//correct code without tdz error:
let a=10;
const b=20;
console.log(a);
console.log(b);

// What is TDZ and how to avoid it?
// TDZ(temporal dead zone) is the time between the entering of the scope and the actual declaration of the variable.
// In the first example, we are trying to access the variable 'a' before it is declared using 'let', which results in a tdz error.
//meaning that the variable is in a "dead zone" from the start of the block until the declaration is processed.


// To avoid tdz error, always declare variables before using them in the code, just like in the second example above.
//this shrinks the temporal dead zone to zero, allowing safe access to the variable. 