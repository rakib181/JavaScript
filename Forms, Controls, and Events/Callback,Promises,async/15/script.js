
let promise1 = new Promise((resolve, reject) => {
      resolve(101);
});

let promise2 = new Promise((resolve, reject) => {
    resolve(102);
});
let promise3 = new Promise((resolve, reject) => {
    reject(103);
});

let promise4 = new Promise((resolve, reject) => {
    resolve(104);
});

console.log(Promise.all([promise1, promise2, promise3, promise4]));
console.log(Promise.race([promise1, promise2, promise3, promise4]));