
let age = parseInt(prompt("Enter your age:"));
let time = parseInt(prompt("Enter the show time in 24-hour format (e.g: 19 for 7 PM):"));


let ticketPrice = 0;

if (age < 5) {
    ticketPrice = 0; 
} else if (age >5 && age<= 12) {
    ticketPrice = 100;
} else if (age>=13 && age <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 150;
}

if (time >= 20) {
    ticketPrice += ticketPrice * 0.1; 
}


if (ticketPrice === 0) {
    alert("Your ticket is FREE! Enjoy the show!");
} else {
    alert(`Your total ticket price is rs${ticketPrice.toFixed(2)}`);
}
