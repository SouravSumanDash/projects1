let person = {
   fName: "James", 
   lName: "KS",
   address: {
    city: "Pune",
    pincode: 123456,
   },
};

//deep copy
//JS obj => stringified Obj
//let stringifiedPersonOnj = JSON.stringify(person);
//console.log("stringifiedPersonOnj", stringifiedPersonOnj);

//stringified Obj => JS object
//let JsPersonObjCopy= JSON.parse(stringifiedPersonOnj);
//console.log("JSPersonObjCopy", JsPersonObjCopy);

//OR
let JsPersonObjCopy = JSON.parse(JSON.stringify(person));
//console.log("JsPersonObjCopy", JsPersonObjCopy);

person.fName = "Ajay";
person.address.city = "Delhi";

console.log("person after change", person);
console.log("JsPersonObjCopy after change", JsPersonObjCopy);

// deep Copy for array
arr = [10, 20, 30, 40, [50, 60]];
let arrC1 = JSON.stringify(arr);
let arrCopy = JSON.parse(arrC1);
console.log(arrCopy);

arr[4]= "hello";
console.log(arr);
console.log(arrCopy);



