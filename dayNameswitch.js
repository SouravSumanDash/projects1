let dayNumber= parseInt(prompt("Enter the day number from 1 to 7:"));
let dayName;

switch(dayNumber){
  case 1:
    dayName="Monday";
    break;

    case 2:
        dayName="Tuesday";
        break;

    case 3:
        dayName="Wednesday";
        break;
    case 4:
        dayName="Thursday";
        break;
    case 5:
        dayName="Friday";
        break;
    case 6:
        dayName="Saturday";
        break;
    case 7:
        dayName="Sunday";
        break;
    default:
     dayName= "Invalid day number. Please enter a number from 1 to 7.";       
}
alert(dayName);