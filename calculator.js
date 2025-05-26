let a = 30, b = 25, operator = "+";
let result;

switch(operator) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } 
        else {
            result = "Error: Division by zero";
        }
        break;
    default:
        result = "Invalid operator";
}

console.log(`Result: ${result}`);
