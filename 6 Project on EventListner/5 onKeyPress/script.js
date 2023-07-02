// click event

// An element receives a click event when a pointing device button (such as a mouse's primary mouse button)
//  is both pressed and released while the pointer is located inside the element.

// If the button is pressed on one element and the pointer is moved outside the element before the button is released,
//  the event is fired on the most specific ancestor element that contained both elements.

// const boxElement = document.getElementById("box");
// // add a click event listener to the element
// boxElement.addEventListener("click", () => {
//   boxElement.innerText = "Clicked 👍";
//   boxElement.style.width = "fit-content";
//   boxElement.style.backgroundColor = "hotpink";
//   boxElement.style.padding = "15px";
// });

//keypress

// The keypress event is fired when a key that produces a character value is pressed down.



let inputBox = document.getElementById("input-box") 
let display = document.getElementById("display")


// // adding a keypress event listener to the inputbox
inputBox.addEventListener("keypress", (e)=>{
    display.innerText ="You have Pressed " + e.key
})