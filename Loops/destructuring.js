let person = {
    fName: "James",
    lName: "Kumar",
    age: 18,
    address: {
        city: "Texas",
        pincode: 560090,
    },
    hobbies: ["painting", "swimming", "driving", "bird watching"],

};

let { fName, age, address,hobbies } = person;

//let {
  //  fName,
   // age,
   // address: {city, pincode} ,
   // hobbies,
//} =person;




let { city, pincode } = address;
console.log("fName", fName);
console.log("age", age);
console.log("address", address);
console.log("city", city);
console.log("pincode", pincode);
console.log("hobbies", hobbies);


// same key in different object => use alias name (temporary name)

let person1 = {
    fName : "Jhonny",
    lName : "Joe",
    hobbies: ["Netflix"],

};

let { fName: person1fName, lName, hobbies: person1Hobbies } = person1;
// destructuring hobbies array from person1

let [hobPerson1]= person1Hobbies;
console.log("person1Fname", person1fName);
console.log("person1Hobbies", person1Hobbies);
console.log("hobPerson1", hobPerson1);
console.log("lName", lName);


//Array

let fruits = ["apple", "Mango", "Kiwi", "grapes"];
let [fruit1, fruit2]= fruits; // to skip the second element give,

console.log("fruit1", fruit1);
console.log("fruit2", fruit2);







