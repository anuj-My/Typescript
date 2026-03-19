// parameter type
function sayHi(name: string) {
  return `hi, ${name.toUpperCase()}`;
}
sayHi("peter");

// return type
function calculateDiscount(price: number): number {
  const hasDiscount: boolean = true;

  if (hasDiscount) {
    // return "Discount applied";
    return price;
  }
  return price * 0.9;
}

const price = calculateDiscount(500);

// ## Challenge

// - Create a new array of names.
// - Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.
// - Use this function to check if various names are in your array and log the results.

const names: string[] = ["peter", "parker", "marry"];

function checkNames(name: string): boolean {
  return names.includes(name);
}

console.log(checkNames("peter"));

// optional parameters
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 50);
}

let priceAfterDiscount = calculatePrice(1000, 100);

// default parameters
function calcScore(initialScore: number, penaltyPoints: number = 20): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calcScore(50, 10);
let scoreWithoutPenalty = calcScore(200);

// rest parameters
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);

  const total = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return `${message}${total}`;
}

let result = sum("The total is: ", 15, 2, 6, 4, 5);
console.log(result);

// type Void
function logMessage(message: string): void {
  console.log(message);
}

logMessage("hello, typescript");

// ## Functions - Using Union Types as Function Parameters

// ### Challenge

// Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:

// - If the input is of type number, the function should multiply the number by 2 and log the result to the console.
// - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input * 2);
  }
}
processInput(2);
processInput("hey there");

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

console.log(
  createEmployee({ id: 1 }),
  createEmployee({ id: 2 }),
  createEmployee({ id: 3 }),
);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}.`);
}

const newStudent = {
  id: 5,
  name: "peter",
  email: "dfa",
};

// if reference the object it will not check if there is excess property
createStudent(newStudent);

// excess property check
createStudent({ id: 1, name: "bob", email: "bob@gmail.com" });

// ## Challenge

// Your task is to create a function named processData that accepts two parameters:

// - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

// The function should behave as follows:

// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false },
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData("peter"));
console.log(processData(10));
console.log(processData("peter", { reverse: true }));
