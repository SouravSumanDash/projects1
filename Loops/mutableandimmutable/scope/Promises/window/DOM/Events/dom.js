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

 let allPtagElements = document.getElementsByTagName("p");
 console.log("allPtagElements", allPtagElements);

 let onePTagElement = document.querySelector("p");
 console.log("onePTagElement", onePTagElement);

 let allPTagElements = document.querySelectorAll("p");
 console.log("allPTagElements", allPTagElements);

let createH1Element = document.createElement("h1");
createH1Element.innerText = "I AM NEW H1";
//document.write((createH1Element.innerText = "I AM NEW H1"));
//OR
let myContainerElement = document.getElementById("myContainer");
myContainerElement.appendChild(createH1Element);
console.log("myContainerElement", myContainerElement);

let randomTextElement = document.getElementById("randomText");
console.log("randomTextElement", randomTextElement);
randomTextElement.className = "randomStyle1 randomStyle2"; //multiple classes
randomTextElement.classList.add("randomStyle1", "randomStyle2");
//randomTextElement.classList.remove("randomStyle1");

//exercise

function funExercise(){
   randomTextElement.classList.add("randomStyle1");
   setTimeout(() => {
      randomTextElement.classList.add("randomStyle2");
   }, 2000);

   setTimeout(() => {
      randomTextElement.classList.remove("randomStyle2");
   
   randomTextElement.classList.add("randomStyle3");
   
   }, 4000);

   setTimeout(()=> {
      randomTextElement.classList.remove("randomStyle1", "randomStyle3");
   }, 6000);

}
setInterval(()=> {
   // funExercise()
}, 8000);

let allH2Elements = document.querySelectorAll("h2");
console.log("allH2Elements", allH2Elements);

for (let i = 0; i <= allH2Elements.length - 1; i++){
   if ((i+1) % 2 === 0) {
      allH2Elements[i].style.color = "red";
   }
   else {
      allH2Elements[i].style.color = "blue";
   }
}




