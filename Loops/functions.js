// 1. Named function
function addNums(n1,n2){
    return n1 + n2;
    
}
console.log("sum is :", addNums(5,7));

//2. Anonymous function
var subtract = function(num1, num2){
    console.log("difference is :", num1 - num2);
    
}
subtract(70,50);

//3. IIFE (Immediate Invoked function expression)
// Or Self Invoked function

(function (n1,n2) {
    console.log("divide is :",  n1 / n2);
    
})
(30,2);

//4. Arrow function or fat Arrow function
// In single line of code, return is added by JS Engine

var multiply = (n1,n2) => n1 * n2;
console.log("product :", multiply(20,10));

//In case of single parameter, parenthesis is optional
var sqrNum = (n1) =>  n1 * n1;
console.log("sqrNum :", sqrNum(4));

//In case of no paramters, parenthesis is required
var greet= () => {
    console.log("Hello Good Afternoon");
    
};
greet();