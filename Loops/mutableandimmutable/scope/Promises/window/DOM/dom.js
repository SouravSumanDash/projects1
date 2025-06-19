let greetElement = document.getElementById("greet");
console.log("greetElement", greetElement);

//add style
greetElement.style.color = "red";
greetElement.style.backgroundColor = "yellow";
greetElement.innerText = "Hello James Bond";
greetElement.innerHTML = "<button>Hello James Bond </button>";

let transportElements = document.getElementsByClassName("transport");
console.log("transportElements", transportElements);
transportElements[0].innerText = "Super Car";
transportElements[1].innerText = "Good Bike";

// let allPtagElements = document.getElementsByTagName("p");
// console.log("allPtagElements", allPtagElements);

// let onePTagElement = document.querySelector("p");
// console.log("onePTagElement", onePTagElement);

// let allPTagElements = document.querySelectorAll("p");
// console.log("allPTagElements", allPTagElements);

let createH1Element = document.createElement("h1");
createH1Element.innerText = "I AM NEW H1";
// document.write((createH1Element.innerText = "I AM NEW H1"));




