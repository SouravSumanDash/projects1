1. 
/*for loop from 1 to 10//
let i=1;
for(let i=1;i<=10;i++){
    console.log(i);
}
    */
2. //even numbers bw 1 and 50 //

/*
for(let i=2; i<=50; i+=2){
    
        console.log(i);
        
    }
*/

3.  //In JavaScript, you can use the break statement to exit a for loop when a certain condition is met.

//Here’s an example:

/* 
for(let i=1;i<=50;i++){
console.log(i);
 if(i===20){
    console.log("Breaking out of for loop");
    break;
 }
}
 */

4. /*
 let sum=0;
for(let i=1;i<=100;i++){
 sum+=i; 
} 
 console.log("The sum of numbers from 1 to 100 is : " + sum);
  */
 5.  
for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=5;j++) {
        row += (i*j) +"\t";
    }
    console.log(row);
    
}




