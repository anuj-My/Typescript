type USER = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: USER = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: USER = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: USER): USER {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello";
value = 564;

type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");

// challenge

// - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

// - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.

// - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

// - Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

// - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.

type Employee = { id: number; name: string; department: string };

type Manager = { id: number; name: string; employees: Employee[] };

type Staff = Employee | Manager;

const alice: Employee = { id: 5, name: "alice", department: "IT" };
const steve: Employee = { id: 4, name: "steve", department: "Sales" };
const bob: Manager = { id: 1, name: "bob", employees: [alice, steve] };

function printStaffDetails(staff: Staff): string {
  if ("employees" in staff) {
    return `${staff.name} is a manager and manages ${staff.employees.length} employees`;
  } else {
    return `${staff.name} is an employee in the ${staff.department} department`;
  }
}

console.log(printStaffDetails(alice));
console.log(printStaffDetails(bob));

// Intersection type

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = { id: 1, name: "How to cook a dragon", price: 18 };
const book2: Book = { id: 2, name: "secret life of unicorns", price: 24 };

const discountedBook: DiscountedBook = {
  id: 3,
  name: "game of thrones",
  price: 25,
  discount: 0.8,
};

const propName = "age";

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
