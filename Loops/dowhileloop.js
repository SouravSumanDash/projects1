1.
/*
let num = 1;

do {
  console.log(num);
  num++;
}
 while (num <= 5);
*/
2.
/*
| Feature                 | `while` loop                                                 | `do-while` loop                                      |
| ----------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| **Condition checked**   | Before each iteration                                        | After each iteration                                 |
| **Execution guarantee** | May never execute (if condition is false initially)          | Executes at least once (even if condition is false)  |
| **Syntax**              | `while (condition) { ... }`                                  | `do { ... } while (condition);`                      |
| **Use case**            | When you want to check condition **before** running the loop | When you want the loop body to run **at least once** |


Example: while

let x = 0;
while (x > 0) {
  console.log(x);  // Will NOT run because x > 0 is false
  x--;
}


 Example: do-while

let x = 0;
do {
  console.log(x);  // Will run ONCE
  x--;
} while (x > 0);
*/

3.
/*

const inputs = ["hello", "world", "exit"];
let index = 0;
let userInput;

do {
  userInput = inputs[index];
  console.log("User entered:", userInput);
  index++;
} 
  while (userInput !== "exit");

console.log("Loop ended because user entered 'exit'.");

*/

4. 
/*

const numbers = [5, 10, 15, 20]; 
let index = 0;
let sum = 0;
let number;

do {
  number = numbers[index];
  sum += number;
  index++;
}
   while (index < numbers.length);

console.log(`Total sum: ${sum}`);

*/

5.
/*
let num = 10;

do {
  console.log(num);
  num--;
}
 while (num >= 1);
*/

6.
/*
Yes, a do-while loop can run infinitely if the condition always evaluates to true.

Example in JavaScript:

do {
  console.log("This loop runs forever!");
}
 while (true);

Explanation:

The loop executes the do block at least once.

Then it checks the condition true, which is always true.

So the loop never ends until manually interrupted (e.g., Ctrl+C or program termination).

Why Use an Infinite Loop?

1. Infinite loops are sometimes used in:
2. Servers (e.g., waiting for requests)
 3. Event listeners
 4. Polling mechanisms

However, they should be used carefully, with appropriate break conditions or manual interrupts.

*/

7.
/*

Why Choose a do-while Loop?

1.  Executes at Least Once

A do-while loop always runs at least once, even if the condition is false initially.

i. Useful when the loop body must execute before the condition is checked.
ii. Example: Prompting for user input at least once, then validating.

2. Readability for Specific Scenarios

Makes sense when the loop logic depends on an initial action.

do-while reads naturally as "Do this... then check the condition."

3.  Common Use Cases

i. User input validation

ii. Menu selection

iii. Retry mechanisms (e.g., network requests, login attempts)

iv. Games or simulation loops (initial state setup)

4. Cleaner Code

In some cases, it avoids having to duplicate code outside the loop to ensure it runs at least once.

*/

8.

/*

let num = 1;

do {
  console.log(num);
  num *= 2;
} 
while (num <= 1000);

console.log("Final value:", num);

*/

9. 
/*

Here’s a JavaScript do-while loop that prints a message at least once, regardless of the condition:


do {
  console.log("This message prints at least once!");
} 
  while (false); // The condition is false, but the loop runs once
 
  Explanation:

The loop prints the message at least once, even though the condition is false.

do-while ensures the block runs before checking the condition.

Output:


This message prints at least once!

*/

10. 
/*
Let’s compare a while loop and a do-while loop, and then convert one into the other.

 Original while Loop Example:
let num = 1;

while (num <= 5) {
  console.log(num);
  num++;
}

This prints numbers 1 to 5, but only if num <= 5 from the start.
 Converted to do-while Loop:

let num = 1;

do {
  console.log(num);
  num++;
}
 while (num <= 5);

 This does the same thing but ensures the block executes at least once, even if num starts greater than 5.

 Key Steps to Convert while to do-while:

 1.Move the loop body into the do { ... } block.
2. Place the while (condition); after the block.

 Why Convert?
You may want the code to run at least once, regardless of the condition.

User input loops often start as while, but do-while ensures a first prompt.

*/