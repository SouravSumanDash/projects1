let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click', function(event) {
    event.preventDefault()
// console.log("submitBtn clicked", event);
let loginForm = document.forms['loginForm']
let emailField = loginForm.email
let passwordField = loginForm.password

let isValidEmail = validateEmail(emailField.value)
let isValidPassword = validatePassword(passwordField.value)
console.log("isValidEmail", isValidEmail);
console.log("isValidPassword", isValidPassword);

if (isValidEmail && isValidPassword) {
    // make an api call and send the data to backend
    setTimeout(()=>{
        alert("Login successful")
        emailField.value=''
        passwordField.value=''
    },100)
  }
})

let validateEmail = (emailValue) => {
    if(emailValue) {
        if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+(\.\w{2,3})$/.test(emailValue)) {
         document.getElementById('emptyEmail').style.display = 'none'
         document.getElementById('invalidEmail').style.display = 'none'
         return true
     } else {
        document.getElementById('emptyEmail').style.display = 'none'
        document.getElementById('invalidEmail').style.display = 'block'
        return false
     }
    }
    else {
        document.getElementById('emptyEmail').style.display = 'block'
        document.getElementById('invalidEmail').style.display = 'none'
        return false
    }
}

let validatePassword = (passwordValue) => {
    if (passwordValue) {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(passwordValue)) {
           document.getElementById('emptyPassword').style.display = 'none'
           document.getElementById('invalidPassword').style.display = 'none'
           return true
        } else {
     document.getElementById('emptyPassword').style.display = 'none'
     document.getElementById('invalidPassword').style.display = 'block'   
     return false
    }
} else{
        document.getElementById('emptyPassword').style.display = 'block'
        document.getElementById('invalidPassword').style.display = 'none'
        return false
    }
}
