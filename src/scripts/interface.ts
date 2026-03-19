interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre: string;
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  genre: "self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  //   printSomething: function (someValue) {
  //     return someValue;
  //   },
  // arrow
  // printSomething:  (someValue) => {
  //     return someValue;
  //   },

  printSomething(someValue) {
    return someValue;
  },
};

deepWork.printAuthor();
deepWork.printTitle("is awesome");
deepWork.printSomething(100);

// Advanced Interface
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "john",
  age: 32,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

interface Employee extends Person {
  employeeId: number;
}
const employee: Employee = {
  name: "jane",
  age: 28,
  employeeId: 4856,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  },
};

console.log(person.getDetails());
console.log(employee.getDetails());

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager = {
  name: "bob",
  age: 35,
  dogName: "louis",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.name}, dog: ${this.dogName}`;
  },
  managePeople() {
    console.log("managing...");
  },
};

console.log(manager.managePeople());

// ## Challenge - Part 1

// - Define the Person interface Start by defining a Person interface with a name property of type string.
// - Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
// - Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
// - Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
// - Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

function getEmployee(): Person1 | DogOwner1 | Manager1 {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return {
      name: "john",
    };
  } else if (randomNumber < 0.66) {
    return {
      name: "sarah",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("managing people...");
      },
      delegateTasks() {
        console.log("delegating tasks...");
      },
    };
  }
}

interface Person1 {
  name: string;
}

interface DogOwner1 extends Person1 {
  dogName: string;
}

interface Manager1 extends Person1 {
  managePeople(): void;
  delegateTasks(): void;
}

const employee1: Person1 | DogOwner1 | Manager1 = getEmployee();
console.log(employee1);

function isManager(obj: Person1 | DogOwner1 | Manager1): obj is Manager1 {
  return "managePeople" in obj;
}

console.log(isManager(employee1));

if (isManager(employee1)) {
  employee1.delegateTasks();
}
