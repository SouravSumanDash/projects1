let char = prompt("Enter a single letter:");


char = char.toLowerCase();


if (char.length !== 1 || !char.match(/[a-z]/i)) {
    alert("Invalid input. Please enter a single letter.");
} 
else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    alert(char + " is a vowel.");
}
 else {
    alert(char + " is a consonant.");
}

