class Student {
  constructor(name) {
    this.name = name;
  }

  printDetails() {
    return `Hello, my name is ${this.name}`;
  }
}

// Calling the getDescription method
const s1 = new Student("Vikarn Jha");
console.log(s1.printDetails()); // Output:
