function getPerson(person) {
  try {
    if (!person.name || !person.age) {
      throw new Error("Invalid parameter type");
    }
    return `Name: ${person.name}, Age: ${person.age}`;
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson({ name: "Vikarn Jha", age: "20" })); // Output:- Name: Vikarn Jha, Age: 20
console.log(getPerson({ name: "Vikarn Jha" })); // Output:- Invalid parameter type
console.log(getPerson(["Vikarn Jha", "20"])); // Output:- Invalid parameter type
