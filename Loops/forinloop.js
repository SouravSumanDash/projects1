
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

