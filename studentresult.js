
let subject1 = parseInt(prompt("Enter marks for Subject 1:"));
let subject2 = parseInt(prompt("Enter marks for Subject 2:"));
let subject3 = parseInt(prompt("Enter marks for Subject 3:"));

let average = (subject1 + subject2 + subject3) / 3;


let failCount = 0;
if (subject1 < 40) failCount++;
if (subject2 < 40) failCount++;
if (subject3 < 40) failCount++;


if (subject1 >= 40 && subject2 >= 40 && subject3 >= 40) {
    alert("Result: PASS (All subjects 40 or above)");
} 
else if (failCount === 1) {
    
    let hasGrace = (subject1 >= 35 || subject2 >= 35 || subject3 >= 35);
    if (hasGrace && average >= 50) {
        alert("Result: PASS with grace marks (One subject 35-39 and average >= 50)");
    } 
    else {
        alert("Result: FAIL");
    }
} 
else {
    alert("Result: FAIL (More than one subject below 40)");
}
