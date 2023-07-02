// Define the input string
const input = "Hello World";

// Define the function to reverse the string after 2 seconds
function reverseStringWithDelay(str) {
  setTimeout(() => {
    const reversedString = str.split("").reverse().join("");
    // Real string
    console.log(`Real string ${input}`);
    // Reverse string
    console.log(`Reverse string ${reversedString}`);
  }, 2000);
}
// Call the function with the input string
reverseStringWithDelay(input);
