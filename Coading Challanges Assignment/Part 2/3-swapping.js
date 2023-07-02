function swap(x, y) {
  [x, y] = [y, x];
  return [x, y];
}
let x = 5;
let y = 10;
[x, y] = swap(x, y);
console.log("Value of X and Y after Swapping");
console.log(`X = ${x}`);
console.log(`Y = ${y}`);
// output
// Value of X and Y after Swapping
// X = 10
// Y = 5
