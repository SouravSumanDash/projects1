
11. /*
 let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(key);  
}

12.
1️. For Loop

A for loop is a general looping construct used in many programming languages (like C, Java, Python, etc.) to repeat a block of code a specific number of times or iterate over a sequence of values.

Key Characteristics:

You control the iteration using a counter or range.

Often used for numeric loops (e.g., iterating a certain number of times).

2️. For-In Loop

A for-in loop (also called a "for-each loop" in some languages) is used to iterate over the elements of a collection (like a list, array, dictionary, or string).

Key Characteristics:

Iterates directly over elements in a sequence or collection.

No need for manual indexing or counters.

| Feature           | For Loop                                          | For-In Loop                                       |
| ----------------- | ------------------------------------------------- | ------------------------------------------------- |
| Purpose           | Repeat a block of code a specific number of times | Iterate over elements in a collection or sequence |
| Control Mechanism | Uses a counter or range                           | Uses the elements directly                        |
| Common Usage      | Numeric iterations, fixed repetitions             | Iterating over arrays, lists, dictionaries, etc.  |
| Example Language  | C, Java, Python (with `range`)                    | Python, JavaScript (for arrays/objects), etc.     |

*/

13. /*  
const person = {
 name: "Sourav",
 age: 25,
 city: "Bangalore"
};
for (let key in person){
    console.log(person[key]);
    
} 
*/
14. /*   
const data = {
   apple:1,
   banana:2,
   apricot:3,
   carrot:4,
   avocado:5  
};
let count = 0;
for(let key in data){
    if (key.startsWith("a")){
       count++;
       
    }
}
console.log("Number of keys starting with 'a':", count);
*/

15.
/*Using break
The break statement exits the loop immediately when a condition is met.
Exit the loop when a key equals "apricot".

const data = {
  apple: 1,
  banana: 2,
  apricot: 3,
  carrot: 4,
  avocado: 5
};

for (let key in data) {
  if (key === "apricot") {
    console.log("Found 'apricot'. Stopping loop.");
    break;
  }
  console.log("Key:", key);
}
*/
/*Using continue

The continue statement skips the rest of the current iteration and continues with the next one.

Example: Skip keys that do not start with "a".
*/

/*
const data = {
  apple: 1,
  banana: 2,
  apricot: 3,
  carrot: 4,
  avocado: 5
};

for (let key in data) {
  if (!key.startsWith("a")) {
    continue;
  }
  console.log("Key starting with 'a':", key);
}
*/
16.

/*
const data = {
  apple: 1,
  banana: "two",
  apricot: 3,
  carrot: "four",
  avocado: 5
};

const numericOnly = {};

for (let key in data) {
  if (typeof data[key] === "number") {
    numericOnly[key] = data[key];
  }
}

console.log(numericOnly);

*/
17.
/*
In most browsers:

If you add a new property, it might not be visited in the same iteration.

But it may be visited in subsequent iterations if the engine re-evaluates the list of properties.

 Example:

const obj = {
  a: 1,
  b: 2
};

for (let key in obj) {
  console.log(key);
  
  if (key === 'a') {
    obj.c = 3; 
  }
}



In most cases, c is not logged because the list of keys is determined before the loop starts.

 However, if you:
Modify existing properties (change their value), those changes will reflect immediately.

Delete properties inside the loop, the deleted keys may or may not be visited, depending on when deletion occurs.


*/
18.
/*
const data = {
  a: 10,
  b: "hello",
  c: 20,
  d: 15,
  e: "world"
};

let total = 0;

for (let key in data) {
  if (typeof data[key] === "number") {
    total += data[key];
  }
}

console.log("Total sum of numeric values:", total);

*/

19.
/*
You can use a for-in loop to iterate over an array’s indexes because arrays are just objects with numeric keys (0, 1, 2, ...).

🔸 Example:


const fruits = ["apple", "banana", "cherry"];

for (let index in fruits) {
  console.log(index);           
  console.log(fruits[index]);   
}



 Better alternatives
for loop (classic)


for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for-of loop (for array values)

for (let fruit of fruits) {
  console.log(fruit);
}
forEach method

fruits.forEach((fruit) => {
  console.log(fruit);
});

*/
20.
/*
What are Enumerable Properties?
Enumerable properties are the ones that show up during for-in iteration or when using Object.keys().

By default, properties you add via assignment or Object.defineProperty with enumerable: true are enumerable.

Non-enumerable properties are hidden from for-in and most standard iterations.

🔸 Using for-in
The for-in loop only iterates over enumerable properties of an object (both own and inherited enumerable properties).

🔸 Example:

const obj = {
  a: 1,
  b: 2
};

Object.defineProperty(obj, 'hidden', {
  value: 42,
  enumerable: false
});

for (let key in obj) {
  console.log(key);  
}

console.log(Object.keys(obj)); 
console.log(Object.getOwnPropertyNames(obj)); 



 How to Identify Enumerable vs Non-Enumerable
Use for-in: iterates over enumerable properties.

Use Object.keys(obj): gets own enumerable property names.

Use Object.getOwnPropertyNames(obj): gets own properties, both enumerable and non-enumerable.

Use Object.getOwnPropertyDescriptor(obj, 'prop') to inspect if a property is enumerable.
*/

