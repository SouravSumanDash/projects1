let dayNumber = parseInt(prompt("Enter the day number between 1 and 7:"));

switch(dayNumber){
  case 1:
     alert("Monday");
     break;

  case 2:
    alert("Tuesday")
    break;

    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
         break;
    default: 
     alert("Invalid input: Please enter the day number between 1 and 7.");
}