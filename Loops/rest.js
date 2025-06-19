// rest operator

function add(...nums){
    let sum = 0;
    for(let i=0;i<=nums.length-1;i++){
        sum +=nums[i]; // sum = sum +nums[i];

    }
    console.log("sum", sum);
    
}

add(10,20,23,26,21,33,12,1);

//default parameter
function greet(name = "Gogo"){
console.log("Hello", name);


}
greet("Ajay");
