function removeDuplicates(array) {
  return [...new Set(array)];
}
const numbers = [1, 2, 3, 2, 4, 5, 1];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); // output: [1, 2, 3, 4, 5]
