function doubleArray(arr, callback) {
  const doubledArr = [];
  for (let i = 0; i < arr.length; i++) {
    doubledArr.push(callback(arr[i]));
  }
  return doubledArr;
}
const originalArray = [1, 2, 3, 4, 5];

function double(num) {
  return num * 2;
}

console.log(doubleArray(originalArray, double)); // Output: [2, 4, 6, 8, 10]
