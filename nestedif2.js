let fruit = "apple";  // Try "apple", "mango", or "kiwi"
let qty = 10;
let total_price = 0;

if (fruit === "apple") {
    if (qty > 0 && qty <= 10) {
        total_price = qty * 20;
    } else if (qty > 10 && qty <= 25) {
        total_price = qty * 15;
    } else if (qty > 25 && qty <= 50) {
        total_price = qty * 10;
    } else {
        total_price = qty * 8;
    }
    console.log("Price of apple is: " + total_price + " rs");
}

else if (fruit === "mango") {
    if (qty > 0 && qty <= 10) {
        total_price = qty * 45;
    } else if (qty > 10 && qty <= 25) {
        total_price = qty * 30;
    } else if (qty > 25 && qty <= 50) {
        total_price = qty * 24;
    } else {
        total_price = qty * 20;
    }
    console.log("Price of mango is: " + total_price + " rs");
}

else if (fruit === "kiwi") {
    if (qty > 0 && qty <= 10) {
        total_price = qty * 45;
    } else if (qty > 10 && qty <= 25) {
        total_price = qty * 30;
    } else if (qty > 25 && qty <= 50) {
        total_price = qty * 24;
    } else {
        console.log("Kiwi is out of stock");
        total_price = 0;
    }

    // Only log if price was calculated
    if (total_price > 0) {
        console.log("Price of kiwi is: " + total_price + " rs");
    }
}

else {
    console.log("Invalid fruit selected.");
}

console.log("Total price: " + total_price + " rs");
