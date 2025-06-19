function greet(name,callback,callback1){
    console.log("hi welcome to " + name);
    callback(rvcollege);
    callback1(rvcollegename);
}

function rvcollege(callback){
    console.log("rvcollege function");
    
}
function rvcollegename(callback1){
    console.log("Welcome prof ranganath,prof sreelela");
    
}

function sitcollege(){
    console.log("sitcollege function");
    
}
function nmamitcollege(){
    console.log("nmamitcollege function");
    
}
greet('dsedify', rvcollege,rvcollegename);