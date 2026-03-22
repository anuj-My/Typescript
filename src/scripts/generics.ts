// Genrics

let array1: Array<string> = ["Apple", "Banana", "Mango"];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, true];

function createString(arg: string): string {
  return arg;
}

function createNumber(arg: number): number {
  return arg;
}

function genericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = genericFunction<string>("hello");
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "hello world",
  getValue() {
    this.value;
  },
};

async function someFunc(): Promise<string> {
  return "hello world";
}

const result = someFunc();

// without generic

// function createArray(length: number, value: string): string[] {
//   let result: string[] = [];
//   result = Array(length).fill(value);

//   return result;
// }
// console.log(createArray(3, "hello"), createArray(2, 100));

// with generic
function createArray<T>(length: number, value: T): Array<T> {
  let result: string[] = [];
  result = Array(length).fill(value);

  return result;
}
console.log(createArray<string>(3, "hello"), createArray<number>(2, 100));

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

console.log(pair<number, string>(12, "hey"));

function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

processValue("hello");

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student);
printName(product);

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 4, 3],
};

const randomStuff: StoreData = {
  data: [1, 2, "random", 3],
};
