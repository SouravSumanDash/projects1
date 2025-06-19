console.log("this", this); // this in object points to current object and
// for browser points to window object

var name = "Ajay";
var age = 18;
console.log("name", name); // it will overwrite name in window object
console.log("age", age);

function someFunc(){
    console.log("someFunc executed");
}
someFunc();

// alert doesn't return anything=> undefined
 let alertUser = alert("This is to alert you");
console.log("alertUser", alertUser); //undefined

//confirm returns boolean
let confirmAge = confirm("Are you 18+ ?");
console.log("confirmAge", confirmAge);
console.log(confirmAge ? "Eligible to vote" : "not eligible to vote");

let userAge = prompt("Enter your age");
console.log("userAge", typeof parseInt(userAge));

if (userAge) {
  if (parseInt(userAge) > 18) {
     window.open("https://www.flipkart.com/");
   } else {
       window.open("https://www.firstcry.com/");
 }

 }

console.log("history", history);
console.log("location", location);
console.log("navigator", navigator);
console.log("screen", screen);



