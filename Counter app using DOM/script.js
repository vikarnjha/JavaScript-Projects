// getting the html elements
const decBtn = document.getElementById("decBtn");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// decrement button click
decBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  // if (value > 0) {
  //   displayValue.innerText = value - 1;
  // } else {
  //   alert("Negative value not allowed");
  // }
  displayValue.innerText = value - 1;
});

// increment buutton click
incBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  // if (value >= 10) {
  //   alert("Not more then 10");
  // } else {
  //   displayValue.innerText = value + 1;
  // }
  displayValue.innerText = value + 1;
});

//for reset button
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});


// // getting the html elements
// const decrementBtn = document.getElementById("decrementBtn");
// const incrementBtn = document.getElementById("incrementBtn");
// const resetBtn = document.getElementById("resetBtn");
// const displayValue = document.getElementById("displayValue");

// // for decrement button click
// decrementBtn.addEventListener("click", () => {
//   const value = Number(displayValue.innerText);
//   if (value > 0) {
//     displayValue.innerText = value - 1;
//   } else {
//     alert("Negative value not allowed");
//   }
// });

// // for increment button click
// incrementBtn.addEventListener("click", () => {
//   const value = Number(displayValue.innerText);
//   if (value >= 10) {
//     alert("10+ values are not allowed");
//   } else {
//     displayValue.innerText = value + 1;
//   }
// });

// // for reset button click
// resetBtn.addEventListener("click", () => {
//   displayValue.innerText = 0;
// });