let number=parseInt(prompt("Enter a number:"));

if(number >=1 && number <=10){
    alert("The number is between 1 and 10.");
}
else if(number >=11 && number <=20){
    alert("The number is between 11 and 20.");
}
else if(number > 20){
    alert("The number is greater than 20.");
}
else{
    alert("The number is not in any valid range.")
}