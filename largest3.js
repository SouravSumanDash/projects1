let num1=parseInt(prompt("Enter the first number: "));
let num2=parseInt(prompt("Enter the second number: "));
let num3=parseInt(prompt("Enter the third number: "));

let largest;

if((num1 >= num2) && (num1 >= num3)){
    largest=num1;
    console.log("The largest number is: "+num1);
      
    
}
else if((num2 >= num1) && (num2 >= num3)){
    largest=num2;
 console.log("The largest number is : "+num2);

}
else{
    largest=num3;
    console.log("The largest num is: "+num3);
    
}
alert("The largest number is : " +largest);