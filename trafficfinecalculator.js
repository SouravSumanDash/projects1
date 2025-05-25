
let speed = parseInt(prompt("Enter your speed (km/h):"));
let isSchoolZone = prompt("Is it a school zone? (yes/no)").toLowerCase() === "yes";
let fine = 0;

if (speed > 100) {
    fine = 2000;
} 
else if (speed > 80) {
    fine = 1000;
} 
else if (speed > 60) {
    fine = 0; 
}


if (isSchoolZone && fine > 0) {
    fine *= 2;
}


if (speed > 60) {
    if (fine > 0) {
        alert(`Your fine is rs${fine}.`);
    } 
    else {
        alert("Warning: You are over the speed limit!");
    }
}
 else {
    alert("You are within the speed limit. Drive safe!");
}
