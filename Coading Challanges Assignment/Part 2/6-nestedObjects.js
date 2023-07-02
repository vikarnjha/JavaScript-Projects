function extractNameAndStreet({ name, address: { street } }) {
  return { name, street };
}
const person = {
  name: "Vikarn Jha",
  age: 22,
  address: {
    street: "Saketpuri Bazar Samiti",
    city: "Patna",
    state: "Bihar",
  },
};

console.log(extractNameAndStreet(person));
// output: { name: "Vikarn Jha", street: "Saketpuri Bazar Samiti" }
