// let keyword is a modern variable declaration.

let name , copyName , username; // We can declare multiple variables in one go

name = "Javascript";

copyName=name;

console.log(copyName);

// Var keyword originates from very old times. It’s generally not used in modern scripts.

var message = "Hello";

// Difference between var and let: let variable cannot be used before initialization. 
   //Var variable can be used before initialization

// Const keyword is like let, but the value of the variable can’t be changed. When a programmer is 
 //sure that a variable will never change, they can declare it with const.

 const myBirthday='31.08.1986';

 //myBirthday='01.01.1986'; Cannot change value this will give exception

 // Variable naming syntax
 //1. Variable name must contain only letters, digits, or the symbols $ and _
 //2. First character of the variable name must not be a digit.

 //the dollar sign '$' and the underscore '_' can also be used in names

 let $=10;
 let _=20;

 console.log($+_); //30

 //Incorrect variable names

 //let 1userName; // Invalid or unexpected token

 //let user-Name; // SyntaxError: Unexpected token '-'. hyphens are not allowed in the name

 // Case matters in the variable name

 let apple=10;
 let AppLE=20;

 console.log(apple);
 console.log(AppLE);

 // Above two are different variables





