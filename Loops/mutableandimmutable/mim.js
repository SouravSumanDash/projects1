// primitive datatypes are immutable, values can't be changed, both a and b variables are at different memory location.
let a = 10;
console.log("a", a);

let b = a;
console.log("b", b);

a = 30;
console.log("a after change", a);
console.log("b after change", b);

/////////////////////////////////////////////////
//Array
let fruits = ["Apple", "kiwi", "grapes", "mango"];
//never take a copy like this
// let fruitsCopy = fruits;
//Instead use spread or slice => shallow copy
 //let fruitsCopy = [...fruits];
//OR
let fruitsCopy = fruits.slice(0);
console.log("fruits", fruits);
console.log("fruitsCopy", fruitsCopy);

fruits[1]="orange";
console.log("fruits after change", fruits);
console.log("fruitsCopy after change", fruitsCopy);

////////////////////////////////////////////////////
console.log("****************************************");

//Object
let person = {
    fName: "Raju",
    lName: "KS",
    age: 18,
};

//never copy an object like this
// let personCopy = person;
//Instead use spread or Object.assign() => shallow copy
//let personCopy = { ...person};
//OR
let personCopy = Object.assign({}, person);
console.log("person", person);
console.log("personCopy", personCopy);

person.fName ="Vijay";
personCopy.lName = "TS";
console.log("person after change", person);
console.log("personCopy after change", personCopy);

//template literal
let studentName = "Vijay";
console.log(`hello ${studentName}`);














