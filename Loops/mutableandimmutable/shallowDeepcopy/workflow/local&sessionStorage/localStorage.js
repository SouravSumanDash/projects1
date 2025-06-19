//primitive
//to store data to localStorage
localStorage.setItem("uName", "Ajay");
localStorage.setItem("age", 18);

//To get data from localStorage
let uNameFromLS = localStorage.getItem("uName");
console.log("uNameFromLS", uNameFromLS);

let ageFromLS = localStorage.getItem("age");
console.log("ageFromLS", ageFromLS);

//non primitive
//Array 
let mobiles = ["Apple", "realme", "redmi", "Oppo", "vivo", "oneplus"];
localStorage.setItem("mobiles", JSON.stringify(mobiles));

let mobilesFromLS = JSON.parse(localStorage.getItem("mobiles"));
console.log("mobilesFromLs", mobilesFromLS);

//Object
let watch = {
    brand: "Titan",
    price: 2000,
    color: "Charcoal Black", 
};

localStorage.setItem("watch", JSON.stringify(watch));
let watchFromLS = JSON.parse(localStorage.getItem("watch"));
console.log(watchFromLS);

//to remove specific key , it would remove both key and value based on specific key.
//localStorage.removeItem("uName");

//clear localStorage
//localStorage.clear();