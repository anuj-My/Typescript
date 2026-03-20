// type assertion
let someValue: any = "this is a string";

let strLenth: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name); // undefined

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

const statusValue = "pending";

const user: User = { name: "peter", status: statusValue as Status };

// type unknown
let unknownValue: unknown;

unknownValue = "hello world";
unknownValue = [1, 2, 3];
unknownValue = 42.33455;

// unknownValue.toFixed(2) // cannot do this

// firt check the type if type is unknown
if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error("error from the Error instance");
  } else {
    throw "throwing erorr";
  }
}

try {
  runSomeCode();
} catch (err) {
  // err type unknown
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(err);
  }
}

// type never

let valueNever: never;

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }

  // after all the possible cases type of theme will be never
}

enum Color {
  red,
  blue,
  green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.red:
      return "red";
    case Color.blue:
      return "blue";
    case Color.green:
      return "green";
    default:
      // at build time
      let unexpectedColor: never = color;

      // at runtime
      throw new Error(`unexpected color value: ${color}`);
  }
}

console.log(getColorName(Color.red));
console.log(getColorName(Color.blue));
console.log(getColorName(Color.green));
