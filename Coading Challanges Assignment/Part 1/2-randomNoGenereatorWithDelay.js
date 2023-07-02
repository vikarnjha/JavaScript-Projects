// Define the delay time in milliseconds
let delayTime = 5000;

// Define the function to generate the random number after a delay
function generateRandomNumberWithDelay(delay) {
  // Use setTimeout to delay the execution of the function
  setTimeout(() => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number generated: ${randomNumber}`);
  }, 1000);
}

// Define the countdown function to display the remaining time
function countdown(timeRemaining) {
  if (timeRemaining > 0) {
    console.log(`Generating random number in... ${timeRemaining} seconds`);
    setTimeout(() => {
      countdown(timeRemaining - 1);
    }, 1000);
  } else {
    // console.log("Generating random number...");
    generateRandomNumberWithDelay(delayTime);
  }
}

// Call the countdown function with the delay time in seconds
countdown(delayTime / 1000);
