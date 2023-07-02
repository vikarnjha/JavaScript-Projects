class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    return `${this.name} is a ${this.position} at PW Skills having salary ${this.salary}`;
  }
}

// Calling the getDescription method
const emp = new Employee("Vikarn Jha", "Full Stack Web developer", "₹80000");
console.log(emp.getSalary()); // Output: Vikarn Jha is a Full Stack Web developer at PW Skills having salary ₹80000
