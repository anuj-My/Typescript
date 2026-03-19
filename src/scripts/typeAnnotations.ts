console.log("typescript");

// type string
let movie: string = "spiderman";
movie = "batman";

movie = movie.toUpperCase();
console.log(movie);

// type number
let amount: number = 20;
amount = 12 - 1;

// type boolean
let isActive: boolean = false;
isActive = true;

// ## Challenge

// - Create a variable of type string and try to invoke a string method on it.
// - Create a variable of type number and try to perform a mathematical operation on it.
// - Create a variable of type boolean and try to perform a logical operation on it.
// - Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// - You can use type annotation or inference

const firstName: string = "Peter";

const fullName: string = firstName.concat("Parker");
console.log(fullName);

let age: number = 26;
age = age + 5;

let isAdult: boolean = age >= 18;

console.log(isAdult);
