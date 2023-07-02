function extractFirstSecondAndLast(arr) {
  const [first, second, ...rest] = arr;
  const last = rest.pop();
  return [first, second, last];
}
const arr = [1, 2, 3, 4, 5, 7];
console.log(extractFirstSecondAndLast(arr));
// output [ 1, 2, 7 ]