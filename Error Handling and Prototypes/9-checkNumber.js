function numberChecker(numbers) {
  return function (num) {
    return numbers.includes(num);
  };
}
const arr = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(arr);

console.log(checkNumber(3)); // True
console.log(checkNumber(6)); // False
