function findMaxAndMin(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return { max: max, min: min };
}
const arr = [5, 2, 7, 1, 9];
console.log(findMaxAndMin(arr));
// output { max: 9, min: 1 }