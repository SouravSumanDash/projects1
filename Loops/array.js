/*let arr=["banana", "kiwi","orange", "apple", "kiwi"];

let indexnum=arr.indexOf("kiwi",2);
let index=arr.indexOf(arr);
console.log(indexnum);
console.log(index);

console.log(arr);



for(let i=0;i<arr.length;i++){
    if(arr[i]==="kiwi"){
        console.log(i);
        i++;
        
    }
}

console.log(arr.includes("orange"));

*/
const fruits = ["banana", "kiwi", "apple", "orange", "kiwi"];
const positions = [1, 4];
let count = 0;

positions.forEach(pos => {
    if (fruits[pos] === "kiwi") {
        count++;
    }
});

console.log(`The fruit 'kiwi' occurs ${count} times at positions 1 and 4.`);


