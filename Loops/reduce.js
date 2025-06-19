/*let num=[10,20,30,40,50];

let sum=num.reduce((total,num)=>total*num);
console.log(sum);

let sum1=num.reduce((total,num)=>total+num,0);
console.log(sum1);

let sum2=num.reduce((total,num)=>total-num,0);
console.log(sum2);

let sum3=num.reduce((total,num)=>total-num)
console.log(sum3);


let maxnum=num.reduce((max,num)=>(max>num?max:num));
console.log(maxnum);

let maxnum1=num.reduce((max,num)=>(max<num?max:num));
console.log(maxnum1);


// Initialize max and min
let maxNum = num[0];
let minNum = num[0];

// Loop through the array
num.forEach((n) => {
    if (n > maxNum) {
        maxNum = n;
    }
    if (n < minNum) {
        minNum = n;
    }
});

console.log("Largest number:", maxNum);
console.log("Smallest number:", minNum);

*/

/*
let num=[10,20,[10,20],30,[4],0];
let flat=num.reduce((fl,val)=>fl.concat(val),[]);

console.log(flat);

console.log(num.flat());

*/
let num=[10,20,[10,20],30,[4],0];
let maxNum = num[0];
let minNum = num[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] > maxNum) {
        maxNum = num[i];
    }
    if (num[i] < minNum) {
        minNum = num[i];
    }
}

console.log("Largest number:", maxNum);
console.log("Smallest number:", minNum);