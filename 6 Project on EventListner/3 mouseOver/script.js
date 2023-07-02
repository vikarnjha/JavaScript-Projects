// click event

// An element receives a click event when a pointing device button (such as a mouse's primary mouse button)
//  is both pressed and released while the pointer is located inside the element.

// If the button is pressed on one element and the pointer is moved outside the element before the button is released,
//  the event is fired on the most specific ancestor element that contained both elements.

const boxElement = document.getElementById("box");
// add a click event listener to the element
boxElement.addEventListener("mouseover", () => {
  boxElement.innerText = "Mouse Over the Button 👍";
  boxElement.style.width = "fit-content";
  boxElement.style.backgroundColor = "hotpink";
  boxElement.style.padding = "15px";
});
