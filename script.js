//+++++++++++++++++++++++++++++++
// SPREAD

const oneArray = [1, 2, 3, 4];
const twoArray = [5, 6, 7, 8];

// const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray, twoArray]

const threeArray = [...oneArray, ...twoArray];
// console.log(threeArray);

// +++++++++++++++++++++++++++++++++++++++++++++++++
// REST

function manyArguments() {
  console.log(typeof arguments);
  let args = Array.from(arguments);
  let finalArr = args.map((e) => e);
  console.log(finalArr);
}

function manyArgumentv2(...args) {
  console.log(typeof args);
  let finalArr = args.map((e) => e);
  console.log(finalArr);
}

// manyArguments(1, 2, 3)
// manyArgumentv2(1, 2, 3)

// +++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["Anupam", "Raj"];
const newNames = ["Aryan", ...names, "Arun"];

const sitename = "morelikes.online";
console.log([...sitename]);

function morelikes(...values) {
  return values;
}

console.log(morelikes("Anupam", "Raj"));

let emptySet = new Set();

// console.log(emptySet.size);

let myArray = [1, 2, 3, 4, 3, 2];
let newSet = new Set([...myArray]);
console.log(newSet);

newSet.add(9);
newSet.clear();
console.log(newSet);
// console.log(newSet.has(9));

// Set difference

function setDifference(setA, setB) {
  return new Set([...setA].filter((el) => !setB.has(el)));
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let map = new Map();

console.log(map.size);
