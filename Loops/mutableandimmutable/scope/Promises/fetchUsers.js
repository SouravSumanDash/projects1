const URL = "https://jsonplaceholder.typicode.com/users";
fetch(URL)
 .then((response) => response.json())
 .then((data) => console.log("data :", data))
 .catch((err) => {
    console.log("err", err);
})
 .finally(() => {
    console.log("finally executed");
    
 });  //finally block will execute everytime and will not depend whether the promise is resolved or rejected.

 // async await
 let fetchUsers = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        console.log("data", data);

        // Displaying user object on browser
        let usersList = `<ul>`;
        data.forEach((value) => {
            let list = `<li>${value.name}</li>`;
            usersList += list;
            //usersList = usersList + list;
       });
       usersList += `</ul>`;
       console.log("usersList", usersList);
       let usersContainerElement = document.getElementById("usersContainer");
       usersContainerElement.innerHTML = usersList;
       //
    } catch (err) {
        console.log("err", err);
    } finally {
        console.log("Finally executed");
    }
 };
 fetchUsers();