let gpa = parseFloat(prompt("Enter your GPA:"));
let extracurriculars = parseInt(prompt("Enter number of extracurricular activities:"));


if (gpa > 9.5) {
    alert("Eligible for scholarship (GPA > 9.5).");
}
 else if (gpa >= 8.0 && extracurriculars >= 2) {
    alert("Eligible for scholarship (GPA >= 8.0 and at least 2 extracurriculars).");
}
 else {
    alert("Not eligible for scholarship.");
}
