// Type Array

let prices: number[] = [100, 24, 25];

prices.push(12);

// type will be empty array
let randomValues: [] = [];

// type infernce according to the value of array
let names = ["peter", "marry", 1];

let stringOrNumberArr: (string | number)[] = ["peter", 18, 424];

// type objects
let car: { brand: string; year: number } = { brand: "maruti", year: 2020 };

car.brand = "ford";
// car.color: 'white'

// using type infernce
let book = { title: "book", cost: 10 };
let desk = { title: "desk", cost: 20 };
let notebook = { title: "notebook" };

// optional property
const items: { readonly title: string; cost?: number }[] = [
  book,
  desk,
  notebook,
];

// cannot modify title cause it readonly
// items[0].title = "new book";
