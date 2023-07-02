function manipulateString(str, callback) {
  const newStr = str.toUpperCase();
  callback(newStr);
}
function logString(newStr) {
  console.log(`The manipulated string is: ${newStr}`);
}
manipulateString("hello, world!", logString); // Output: "The manipulated string is: HELLO, WORLD!"
