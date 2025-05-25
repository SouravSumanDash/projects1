
let temperature = parseFloat(prompt("Enter the temperature (°C):"));
let isRaining = prompt("Is it raining? (yes/no)").toLowerCase() === "yes";
let windSpeed = parseFloat(prompt("Enter the wind speed (km/h):"));


if (isRaining) {
    alert("Suggestion: Stay indoors.");
} 
else if (windSpeed > 30) {
    alert("Suggestion: Avoid cycling.");
}
 else if (temperature > 25) {
    alert("Suggestion: Go for a picnic.");
}
 else if (temperature >= 15 && temperature <= 25 ) {
    alert("Suggestion: Go for a walk.");
} 
else {
    alert("Suggestion: Stay warm and enjoy a cozy day indoors.");
}
