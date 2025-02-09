
let promise = new Promise((resolve, reject) => {
       setTimeout(() => {
            resolve('Data loaded');
       }, 2000);
});

console.log(promise);



