class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.company} ${this.model}`;
  }
}

// Calling the getDescription method
const myCar = new Car("Skoda", "Rapid", 2022);
console.log(myCar.getDescription()); // Output: This is a 2022 Skoda Rapid
