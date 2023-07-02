class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Calling the getDescription method
const p1 = new Person("Vikarn Jha", 20);
const p2 = new Person();
console.log(p1.getDescription()); // Output: Name: Vikarn Jha, Age: 20
console.log(p2.getDescription()); // Output: Name: Unknown, Age: 0
