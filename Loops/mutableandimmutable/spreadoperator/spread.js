//Array
let cars = ["Alto", "Safari", "XUV700", "Urus", "Nexon"];

//shallow copy
let carsCopy = [...cars];
console.log("carsCopy", carsCopy);

//to merge multiple arrays
let nums = [20, 10, 40, 30, 22];
let carsNums = [...cars, ...nums];
console.log("carsNums", carsNums);

//object
let person = {
    fName: "John",
    lName: "Cena",
    age: 24,
};
let address= {
    city: "Bangalore",
    pincode: 560078,
};
//to merge two object
let personAddress = { ...person, ...address };
console.log("personAddress", personAddress);

//address as key
let myAddress = { ...person, myAddress: { ...address } };
console.log("myAddress", myAddress);

//shallow copy
let personCopy = { ...person};
console.log("personCopy", personCopy);








