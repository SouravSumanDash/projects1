//var
// can be re-declared
// can be re-assigned
// has local and global scope
// doesn't have block scope

// global var
var a = 10;
var a = 40;
console.log("global a", a);

function localVar(){
    //local variable
    var a = 20;
    console.log("local var", a);
}
localVar();

for(var i = 1; i <=5; i++){
    console.log("i", i);
}
console.log("i", i);
console.log("i", i);
console.log("i", i);

// ES6
// let
// can be reassigned
// can't be redeclared
// has global and local scope
// has block scope
let b = 20;
b = 30;
// Uncaught SyntaxError: Identifier 'b' has already been declared
// let b = 30;
console.log("global b", b);

function localLet(){
    let b = 50;
    console.log("local b", b);
}
localLet();

for (let j = 1; j <=5; j++){
    console.log("j",j);
}
// // Uncaught ReferenceError: j is not defined
//console.log("j", j);

// const
// can't be redeclared or reassigned
// has global and local scope
// has block scope
const c = 50;
// Uncaught TypeError: Assignment to constant variable.
//c = 60;

// Uncaught SyntaxError: Identifier 'c' has already been declared
//const c = 70;
console.log("global c", c);

function localConst() {
    const c = 77;
    console.log("local c", c);
    
}
localConst();

for (const k = 1; k <= 5; k++) {
    const d = 33;
    console.log("k", k);
    console.log("d", d); //33
}
// Uncaught TypeError: Assignment to constant variable.
console.log("d", d);








