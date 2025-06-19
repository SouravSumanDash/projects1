//primitive
//to store data to sessionStorage
sessionStorage.setItem("uName", "Raju");
sessionStorage.setItem("age", 18);

//To get data from sessionStorage
let uNameFromSS = sessionStorage.getItem("uName");
console.log("uNameFromSS", uNameFromSS);

let ageFromSS = sessionStorage.getItem("age");
console.log("ageFromSS", ageFromSS);

//non primitive
//Array 
let mobiles = ["Apple", "realme", "redmi", "Oppo", "vivo", "oneplus"];
sessionStorage.setItem("mobiles", JSON.stringify(mobiles));

let mobilesFromSS = JSON.parse(sessionStorage.getItem("mobiles"));
console.log("mobilesFromSS", mobilesFromSS);

//Object
let watch = {
    brand: "Titan",
    price: 2000,
    color: "Charcoal Black", 
};

sessionStorage.setItem("watch", JSON.stringify(watch));
let watchFromSS = JSON.parse(sessionStorage.getItem("watch"));
console.log(watchFromSS);

//to remove specific key , it would remove both key and value based on specific key.
//sessionStorage.removeItem("uName");

//clear localStorage
//sessionStorage.clear();
