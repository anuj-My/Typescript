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
