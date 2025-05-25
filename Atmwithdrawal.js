let balance=10000;
let amount= parseInt(prompt("Enter the amount to withdraw:"));

if(amount > balance){
    alert("Insufficient balance.");
}
else if(amount %100 !== 0){
    alert("Amount must be divisible by 100.");
}
else if(amount <= 0){
    alert("Invalid withdrawal amount");
}
else{
 balance -= amount;
 alert("Withdrawal successful. Remaining balance: " + balance);
}