1. 
/* 
let i=1;

while(i<=10){
    console.log(i);
    i++;
}
*/

2. 
/*
let n = 5; 
let factorial = 1;
let i = n;

while (i > 0) {
  factorial *= i;
  i--;
}

console.log(`Factorial of ${n} is ${factorial}`);
*/


3. 
/*
const inputs = ["hello", "world", "stop"];
let index = 0;
let userInput = inputs[index];

while (userInput !== "stop") {
  console.log("User entered:", userInput);
  index++;
  userInput = inputs[index];
}

console.log("Loop ended because user entered 'stop'.");
*/

4.
/*
Yes! A while loop can run infinitely if the condition always evaluates to true. This is called an infinite loop, and it keeps running until the program is forcibly stopped or interrupted.

while (true) {
  console.log("This loop runs forever!");
}

 Explanation:

while (true) sets a perpetually true condition.

The loop’s body will never stop unless you break it with a break statement, an external signal, or a manual interruption (like Ctrl+C).

Important Note:
Infinite loops are useful in certain cases (e.g., servers, waiting for events), but they can crash a program if not managed properly.
*/

5.
/*
let sum = 0;
let num = 1;

while (sum <= 100) {
  sum += num;
  console.log(`Added ${num}, sum is now ${sum}`);
  num++;
}

console.log(`Final sum: ${sum}`);

*/

6.
/*
What happens if you forget to update the loop variable in a while loop?
If you forget to update the loop variable (the variable that affects the loop condition), the condition may never change — resulting in an infinite loop.

 Example in JavaScript:

let i = 1;

while (i <= 5) {
  console.log(i); 
  // Oops! Forgot to increment i (i++) here!
}
  What happens?

i stays 1 forever.

The condition i <= 5 always evaluates to true.

The loop never ends, causing an infinite loop.

The program keeps printing 1 endlessly until manually stopped (e.g., by pressing Ctrl+C or closing the window).

💡 Summary
Forgetting to update the loop variable leads to an infinite loop.

The program gets stuck and keeps running unless forcibly interrupted.

This is a common mistake in while loops (and sometimes for loops).
*/

7.
/*
let str = "hello";
let reversedstr = "";
let i = str.length - 1;

while (i >= 0) {
  reversedstr += str[i];
  i--;
}

console.log(`Reversed string: ${reversedstr}`);
*/

8.
/*
let num =2;

while(num<30){
 let isPrime=true;

let i=2;
while(i<=Math.sqrt(num)){
  if(num%i===0){
    
    isPrime=false;
    break;
  }
    i++;
  }
  if(isPrime){
console.log(num);

  }
  num++;
}

*/

9. 
/*
let num = 100; 

while (num >= 1) {
  console.log(num);
  num /= 2;
}

console.log("Final value (less than 1):", num);
*/

10.
/*
let num = 10;

while (num >= 1) {
  console.log(num);
  num--;
}

console.log("Countdown complete!");
*/