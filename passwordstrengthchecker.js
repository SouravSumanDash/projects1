let password=prompt("Enter your password:");

let hasUppercase=/[A-Z]/;
let hasLowercase=/[a-z]/;
let hasNumber =/[0-9]/;
let hasSpecialCharacters=/[!@#$%^&*]/;

if (password.length >=8 && hasUppercase.test(password) && hasLowercase.test(password) && hasNumber.test(password) && hasSpecialCharacters.test(password)){
    alert("Strong password.");
}
else{
    alert("Weak password. Your password must:\n" + "- Be at least 8 characters long\n" + "-Include uppercase and lowercase letters\n" + "-Include at least one number\n" + "-Include at least one special character (!@#$%^&*)");
}