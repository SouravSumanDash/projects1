const URL1 = "https://jsonplaceholder.typicode.com/users";
const URL2 = "https://jsonplaceholder.typicode.com/posts";

let promise1 = new Promise((resolve, reject) => {
    fetch(URL1)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((err) => {
        reject(err);
    });
});

let promise2 = new Promise((resolve, reject) => {
       fetch(URL2)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((err) => {
        reject(err);
    });
});

// Promise.all();
Promise.all([promise1, promise2])
.then((resolve) => {
    console.log("resolve all", resolve);
})
.catch((err) => {
console.log("error", err);
});

// Promise.race();
Promise.race([promise1, promise2])
.then((resolve) => {
    console.log("resolve race", resolve);
})
.catch((err) =>{
 console.log("error", err);
 });