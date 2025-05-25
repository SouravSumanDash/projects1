let age = 18;
let status= (age>=18) ? "Adult":"Minor";
console.log(status);


// What is the ternary operator and how is it used?

The ternary operator in JavaScript is a concise way to write an if...else statement. It’s also known as the conditional operator.

Syntax:
javascript
condition ? expression_if_true : expression_if_false;
If condition is true, it evaluates expression_if_true.

If condition is false, it evaluates expression_if_false.

Key points:
✅ It’s called "ternary" because it takes three operands: a condition, a true expression, and a false expression.
✅ It’s great for short, simple conditional assignments or operations.
✅ You can nest ternary operators, but it can become hard to read.