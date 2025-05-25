let fruit="apple";
let qty=10;
let total_price=0;
if(fruit==="apple") {
    if(qty>0 && qty<=10){
   total_price=qty*20;
 console.log("price of apple is : "+total_price);
}
else if(fruit==="apple" && (qty>10) && (qty<=25)){
    total_price=qty*15;
console.log("price of apple is: "+total_price);

}
else if(fruit==="apple" && (qty>25) && (qty<=50)){
    total_price=qty*10;
console.log("price of apple is: "+total_price);

}
 else {
    total_price=qty*8;
 }
}
   
if(fruit==="mango"){
    if((qty >0) && (qty<=10)){
    total_price=qty*45;
 console.log("price of mango is: "+total_price);
}
else if(fruit==="mango" && (qty>10) && (qty<=25)){
    total_price=qty*30;
console.log("price of mango is: "+total_price);

}

else if(fruit==="mango" && (qty>25) && (qty<=50)){
    total_price=qty*24;
 console.log("price of mango is: "+total_price);
 
}
else {
    total_price=qty*20;
}
    console.log("Price of mango is: " + total_price + " rs");
}  



if(fruit==="kiwi" ){
    if((qty >0) && (qty<=10)){
    total_price=qty*45;
 console.log("price of kiwi is: "+total_price);
}
else if(fruit==="kiwi" && (qty>10) && (qty<=25)){

    total_price=qty*30;
console.log("price of kiwi is: "+total_price);

}
else if(fruit==="kiwi" && (qty>25) && (qty<=50))
{
    total_price=qty*24;
    
    
}
else
{
    console.log("kiwi is No stock");
    total_price=0;
    
}

    if (total_price > 0) {
        console.log("Price of kiwi is: " + total_price + " rs");
    }

else {
    console.log("Invalid fruit selected.");
}


console.log("Fruit: "+total_price +"rs");
}
