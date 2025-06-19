var bikes = ["pulser", "ktm", "RE","ninja", "R15",,,];

// for of
// Array
// for empty elements in an array it gives undefined
for(var bike of bikes){
    console.log("bike", bike);
    }

// for of with object

var person = {
    fName: "Arjun",
    lName: "KM",
    age:22,
};

//Uncaught TypeError: person is not iterable

//for (var value of person){
  //  console.log("value", value);
    
//}

// for in
//Array and Object
// it will ignore empty elements

var mobiles=["samsung","redmi", "oppo",,,"poco","realme",,,]

for(var index in mobiles){
    console.log(`mobiles in index ${index} is ${mobiles[index]}`);
    
}
// object

var laptop = {
    name: "Compaq",
    price: 500000,
    memory: "512GB",
    ram: "16GB",
    processor:"Core i7",

};

for (var key in laptop){
    console.log(`key is ${key}: value is ${laptop[key]}`);
    
}

var employees = [
{
id: 1,
empName: "Raju",
salary: 25000,
},
{
id: 2,
empName: "Ajay",
salary: 18000,
},
{
id: 3,
empName: "Vijay",
salary: 40000,
},
{
id: 4,
empName: "Joe",
salary: 32000,
},
];

// for of
for(var emp of employees){
    if(emp.salary > 20000){
        console.log("empName : salary > 20000 is :", emp.empName);
        
    }
}
// using for in
for(var index in employees){
    //console.log("index", index);
    if(employees[index].salary > 20000 ){
        console.log(
            `index is ${index} where salary > 20000: value is ${employees[index].empName}`

        );
        
    }

}
//WAP to print empName where name > 3 char 
for(var emp of employees){
    if(emp.empName.length > 3){
        console.log("empName: name> 3 char is :", emp.empName);
        
    }
}

// for in
for(var index in employees){
    //console.log(emp);
    if(employees[index].empName.length > 3){
        console.log("empName: name > 3 char is: ", employees[index].empName);
        
    }
}