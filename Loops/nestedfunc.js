// nested function also called function currying
function sqrNums(n1) {
console.log("sqrNums executed");
return function () {
console.log("sqr of num is: ", n1 * n1);
return function (name) {
console.log("hello", name);
};
};
}
sqrNums(10)()("Ajay"); //no. of functions = no. of paranthesis


//Callback function

 function test(callback) {
 console.log("test executed");
 console.log("logic performed");
 var output = 2024;
 console.log("test function output", output);
 callback(output);
 }

 function sample(output) {
 console.log("sample function executed", output);
 }
 test(sample);

//example
// function to get the input from user
 function userInput(callback) {
 var userName = prompt("Please enter your name");
 console.log("username", userName);
 callback(userName);
 }

 //function => show message to user
 function msgUser(userName) {
 alert(`Hello ${userName} welcome to your app`);
 }

 userInput(msgUser);