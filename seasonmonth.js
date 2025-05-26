
let month = new Date().getMonth();

switch(month) {
    case 11: 
    case 0: 
    case 1: 
        console.log("It's Winter season!");
        break;
    case 2:  
    case 3:  
    case 4:  
        console.log("It's Spring season!");
        break;
    case 5: 
    case 6:  
    case 7:  
        console.log("It's Summer season!");
        break;
    case 8:  
    case 9:  
    case 10: 
        console.log("It's Autumn season!");
        break;
    default:
        console.log("Invalid month!");
}
