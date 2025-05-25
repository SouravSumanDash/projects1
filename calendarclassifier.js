let inputDate = prompt("Enter a date in (YYYY-MM-DD):");
let date = new Date(inputDate);

if(isNaN(date.getTime())){
    alert("Invalid date format. Please enter a valid date:(YYYY-MM-DD).");
}
else{
    let dayOfWeek = date.getDay(); 
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    let day = date.getDate().toString().padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    
    const holidays = ["2025-01-01", "2025-12-25", "2025-05-01", "2025-08-15", "2025-01-26"]; 

   
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        alert(`${formattedDate} is a weekend.`);
    } else {
        alert(`${formattedDate} is a weekday.`);
    }

    if (holidays.includes(formattedDate)) {
        alert(`${formattedDate} is a holiday!`);
    } else {
        alert(`${formattedDate} is not a holiday.`);
    }
}
