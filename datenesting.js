let dateStr = prompt("Enter a date (YYYY-MM-DD):");

function isValidDateFormat(str) {
    return /^\d{4}-\d{2}-\d{2}$/.test(str);
}
if (isValidDateFormat(dateStr)) {
    let date = new Date(dateStr);
    
  if (!isNaN(date.getTime())) {
        
        let [year, month, day] = dateStr.split('-').map(Number);
        if (date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day) {
          
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            alert(`Valid date! Day of the week: ${days[date.getDay()]}`);
        } 
        else {
            alert("Invalid date! The day/month values are incorrect.");
        }
    } 
    else {
        alert("Invalid date! The date does not exist.");
    }
} 
else {
    alert("Invalid format! Please use YYYY-MM-DD.");
}
