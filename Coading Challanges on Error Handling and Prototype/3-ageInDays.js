function ageInDays(person, callback) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365;
  callback(fullName, ageInDays);
}
function logMessage(fullName, ageInDays) {
  console.log(
    `The person's full name is ${fullName} and their age in days is ${ageInDays}.`
  );
}

const person = {
  firstName: "Vikarn",
  lastName: "Jha",
  age: 22,
};

ageInDays(person, logMessage); // Output: "The person's full name is John Doe and their age in days is 10950."
