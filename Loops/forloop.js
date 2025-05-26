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
 5.  /*
for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=5;j++) {
        row += (i*j) +"\t";
    }
    console.log(row);
    
}
    */
6. /*Loop Skips odd numbers using continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}
*/
7. /*  Infinite for loop 
for (;;)
     {
    console.log("This loop runs forever!");
    break;

}
Yes, a for loop can run infinitely if you omit all conditions or make the condition always true.

✅ Example of an infinite for loop in JavaScript:
for (;;) {
    console.log("This loop runs forever!");
}
🔍 Explanation:
The syntax for (;;) has no initialization, no condition, and no increment.

Since there’s no condition to stop it, it will run forever unless you break it manually (e.g., with Ctrl + C in terminal or by using a break statement inside).



🛑 Example with a break to stop it:

let count = 0;
for (;;) {
    if (count >= 5) break;
    console.log("Count:", count);
    count++;
} */

8. 
 let fruits = ["Apple", "Banana", "Cherry", "Date", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}




