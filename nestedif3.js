let age = 20;
let country = "India";

if (country === "India") {
  if (age >= 18) {
    console.log("Eligible to vote in India");
  } 
else {
    console.log("Not eligible to vote in India");
  }
} 
else {
  console.log("Voting eligibility rules may differ in " + country);
}
