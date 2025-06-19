let promiseExample = new Promise((resolve, reject) => {
 if (20 > 10) {
    resolve("20 is greater than 10");
 } else {
    reject("20 is not greater than 10");
}
});

let promise = new Promise((resolve, reject) => {});

promiseExample
.then((resolve) => {
    console.log("resolve", resolve);
})
.catch((reject) => {
    console.log("reject", reject);
});
// Multiple catch block can't be given but multiple then block can be given.

//closure

// let URL = ""

// fetch(URL)
// .then((resolve) => {
// resolve("")
// })
// .catch((err) => {
//   reject("")    
// })