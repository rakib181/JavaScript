
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve('Task Completed');
    }, 3000);
});

console.log(promise);



