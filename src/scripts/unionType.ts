// Union type and Any type

let tax: number | string = 10;
tax = 100;
tax = "$20";

// literal type
let requestStatus: "pending" | "success" | "error" = "pending";

requestStatus = "pending";
requestStatus = "error";

// type ANY
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// default type any
let random;

const books = ["1984", "game of thrones", "new"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "194") {
    foundBook = book;
    foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

// ## Challenge

// - Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.
// - Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "delivered";

let discount: number | string = 20;
discount = "20%";
