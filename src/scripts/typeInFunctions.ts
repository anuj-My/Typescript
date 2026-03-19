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
