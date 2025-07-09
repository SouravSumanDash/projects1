//Set
// A Javascript Set is a collection of unique values
// Each values can only occur once in a Set
//The values can be of any type, primitive values or objects.

let mySet = new Set(["a", "b", "c", "a", "b"]);
mySet.add("d");
mySet.add("e");
mySet.add("d");
console.log("mySet", mySet);

////////////////////////////////////////////////////////////////////

//Map
//A Map holds key-value pairs where keys can be any datatype.
//A Map remembers the original insertion order of the keys
//Create a Map
const fruits = new Map();

// Set Map values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("mangoes", 100);

console.log("fruits", fruits);
console.log("fruits size", fruits.size);

// to get the value
console.log("mangoes", fruits.get("mangoes"));

//has() => to check the key is present or not in a Map
console.log("kiwis are present ?", fruits.has("kiwi"));

//delete() bananas
fruits.delete("bananas");
console.log("fruits after delete", fruits);

//to clear the Map
//fruits.clear();
//console.log("fruits after clear", fruits);



