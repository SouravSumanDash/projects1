let cartTotal = parseFloat(prompt("Enter your cart total:"));
let isPremiumMember = prompt("Are you a premium member? (yes/no)").toLowerCase() === "yes";

let discount = 0;

if (cartTotal > 5000) {
    discount = 0.20; 
} 
else if (cartTotal > 3000) {
    discount = 0.10; 
} 
else if (cartTotal > 1000) {
    discount = 0.05; 
}

if (isPremiumMember) {
    discount += 0.05;
}

let finalPrice = cartTotal - (cartTotal * discount);

alert(`Your total discount is ${(discount * 100).toFixed(1)}%`);
alert(`Your final price after discount is rs ${finalPrice.toFixed(2)}`);
