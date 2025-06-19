let str = "Hello";
//concat
console.log("concat", str.concat("Good Afternoon"));

//length
console.log("length", str.length);

//at
//can accept positive and negative index
console.log("at", str.at(1));

//charAt// not take negative index
console.log("charAt", str.charAt(1));

//charCodeAt
console.log("charCodeAt", str.charCodeAt(1));

//trim
let str1 = " Hello Ajay ";
console.log("trim", str1.trim());

//trimStart
console.log("trimStart", str1.trimStart());

//trimEnd
console.log("trimEnd", str1.trimEnd());

//replace
console.log("replace", str.replace("l", "k"));

// replaceAll
console.log("replaceAll", str.replaceAll("l", "k"));

//split
let str2 = "Good morning Ajay";
console.log("split", str2.split(" "));
console.log("split", str2.split(""));

//slice//extract part of a string.
//index can be positive or negative
console.log("slice", str.slice(0, 2));
//OR
console.log("slice", str.slice(-5, -3));

//substring extract part of a string.
//index can only be positive
console.log("substring", str.substring(1, 4));



//startsWith
//returns boolean
console.log("startsWith", str.startsWith("Hell"));

//endsWith
//returns boolean
console.log("endsWith", str.endsWith("llo"));

//padStart
console.log("padStart", str.padStart(20, "qwerty"));

//padEnd
console.log("padEnd", str.padEnd(20, "qwerty"));

//repeat
console.log("repeat", str.repeat(2));

//indexOf
console.log("indexOf", str.indexOf("l"));

//lastIndexOf
console.log("lastIndexOf", str.lastIndexOf("l"));

//includes
//returns boolean
console.log("includes", str.includes("o"));

//toUpperCase
console.log("toUpperCase", str.toUpperCase());

//toLowerCase
console.log("toLowerCase", str.toLowerCase());

//valueOf
var myNum = new Number(14); //creates number object
console.log(myNum);
console.log("valueOf", myNum.valueOf()); //valueOf used to extract Primitive value from number object

//used to convert unicode to readable string.
let greet = "\u0048\u0065\u006c\u006c\u006f\u0020\u0052\u0061\u006a\u0075";
console.log("normalize", greet.normalize());
