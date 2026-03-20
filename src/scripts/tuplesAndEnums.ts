// tuples

let person: [number, string] = [34, "john"];
let date: readonly [number, number, number] = [34, 45, 453];

function getPerson(): [string, number] {
  return ["jon", 34];
}

console.log(getPerson());

// optionals
let susan: [string, number?] = ["susan"];

// enums
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((item) => {
  if (typeof item === "number") {
    console.log(item);
  }
});

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const res: ServerResponse = getServerResponse();

console.log(res);

// ## Challenge

// - Define an enum named UserRole with members Admin, Manager, and Employee.
// - Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
// - Define a function named createUser that takes a User object as its parameter and returns a User object.
// - Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const newUser: User = createUser({
  id: 45,
  name: "peter",
  role: UserRole.Admin,
  contact: ["hacker@hacker.com", "secret"],
});

console.log(newUser);
