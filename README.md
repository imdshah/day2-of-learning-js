# Day 2 of learning JavaScript 
- Today I learned about different types of variables and how they are declared and stored in JavaScript.
- I also learned about the Temporal Dead Zone and why it occurs, and how we can avoid it.
- Also learned that using "var" may result in scope pollution, so using "let" and "const" is encouraged.
- Memory is assigned to "var" and is always allocated in global space, whereas "let" and "const" are allocated in a different memory space known as "script".
- Since "let" and "const" aren't attached to the global object, it's difficult to access these variables before assigning them values.

## What is Temporal dead zone?
TDZ(temporal dead zone) is the time between the entering of the scope and the actual declaration of the variable.

