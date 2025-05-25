let username=prompt("Enter the username: ");
let password=prompt("Enter the password: ");

const correctUsername="admin";
const correctPassword="1234";

if(username === correctUsername && password === correctPassword){
    alert("Login Successful");
}
else{
    alert("Invalid credentials");

}